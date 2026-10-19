import React, { useState } from 'react';
import { CreateProductDTO, Product } from '../types/product';

interface ProductFormProps {
  onProductCreated: (newProduct: Product) => void;
}

/**
 * ============================================================================
 * [MÓDULO 3] - COMPONENTE DE FORMULARIO  (Paso 02: formulario controlado)
 * Rama de trabajo: feature/2-agregar-producto
 * ============================================================================
 * ✅ Paso 02: estado formData tipado + un solo handleChange + inputs conectados.
 * ⏳ Paso 03: handleSubmit con validación, POST y mensajes de éxito/error.
 */
export const ProductForm: React.FC<ProductFormProps> = ({ onProductCreated: _onProductCreated }) => {
  // React es la única fuente de verdad: el valor de cada input vive en este estado
  const [formData, setFormData] = useState<CreateProductDTO>({
    nombre: '',
    categoria: 'Electrónica',
    precio: 0,
    stock: 0,
  });

  // Un solo handler para todos los campos: usa el atributo `name` del input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      // Los inputs siempre entregan texto: convertimos precio y stock a número
      [name]: name === 'precio' || name === 'stock' ? Number(value) : value,
    }));
  };

  // Provisional: en el Paso 03 se reemplaza por handleSubmit con el POST real
  const handlePlaceholderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      '⚠️ Paso 02: los inputs ya están conectados al estado.\n\n' +
      `Datos capturados: ${JSON.stringify(formData)}\n\n` +
      'En el Paso 03 enviaremos estos datos con un POST a MongoDB Atlas.'
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Agregar Nuevo Producto</h2>
          <p className="text-xs text-gray-500">Módulo 3: Formulario controlado con TypeScript.</p>
        </div>
        <span className="text-xs font-mono text-gray-400">Rama: feature/2-agregar-producto</span>
      </div>

      <form onSubmit={handlePlaceholderSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div className="lg:col-span-2">
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
            Nombre del Producto
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej. Teclado Mecánico RGB"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
            Categoría
          </label>
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="Electrónica">Electrónica</option>
            <option value="Computación">Computación</option>
            <option value="Accesorios">Accesorios</option>
            <option value="Audio">Audio</option>
            <option value="Monitores">Monitores</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
            Precio ($)
          </label>
          <input
            type="number"
            name="precio"
            step="0.01"
            min="0"
            value={formData.precio === 0 ? '' : formData.precio}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
            Stock Inicial
          </label>
          <input
            type="number"
            name="stock"
            min="0"
            value={formData.stock === 0 ? '' : formData.stock}
            onChange={handleChange}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>

        <div className="lg:col-span-5 flex justify-end mt-2">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition"
          >
            Guardar Producto (Probar)
          </button>
        </div>
      </form>
    </div>
  );
};
