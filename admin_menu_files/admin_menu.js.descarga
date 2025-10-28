(function () {
    const STORAGE_KEY = 'admin_menu';

    function uid() {
        return Math.floor(Math.random() * 1e9).toString(36);
    }

    function readStorage() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    }

    function writeStorage(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function renderTable() {
        const productos = readStorage();
        const tbody = document.querySelector('#tabla-productos tbody');
        tbody.innerHTML = '';

        productos.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
        <td>${p.nombre}</td>
        <td>$${Number(p.precio).toLocaleString('es-CO')}</td>
        <td>${p.visible ? 'Sí' : 'No'}</td>
        <td class="actions">
          <button class="edit">✏️</button>
          <button class="delete">🗑️</button>
        </td>
      `;

            tr.querySelector('.edit').addEventListener('click', () => editProducto(p.id));
            tr.querySelector('.delete').addEventListener('click', () => deleteProducto(p.id));

            tbody.appendChild(tr);
        });
    }

    function editProducto(id) {
        const productos = readStorage();
        const p = productos.find(x => x.id === id);
        if (!p) return;

        document.getElementById('id').value = p.id;
        document.getElementById('nombre').value = p.nombre;
        document.getElementById('precio').value = p.precio;
        document.getElementById('imagen').value = p.imagen || '';
        document.getElementById('descripcion').value = p.descripcion || '';
        document.getElementById('visible').checked = p.visible !== false;
    }

    function deleteProducto(id) {
        if (!confirm('¿Eliminar este producto?')) return;
        let productos = readStorage();
        productos = productos.filter(x => x.id !== id);
        writeStorage(productos);
        renderTable();
    }

    document.getElementById('form-producto').addEventListener('submit', function (e) {
        e.preventDefault();
        const id = document.getElementById('id').value;
        const nombre = document.getElementById('nombre').value.trim();
        const precio = parseFloat(document.getElementById('precio').value);
        const imagen = document.getElementById('imagen').value.trim();
        const descripcion = document.getElementById('descripcion').value.trim();
        const visible = document.getElementById('visible').checked;

        let productos = readStorage();

        if (id) {
            const idx = productos.findIndex(x => x.id === id);
            if (idx >= 0) {
                productos[idx] = { ...productos[idx], nombre, precio, imagen, descripcion, visible };
            }
        } else {
            productos.push({ id: uid(), nombre, precio, imagen, descripcion, visible });
        }

        writeStorage(productos);
        renderTable();
        e.target.reset();
        document.getElementById('id').value = '';
    });

    document.addEventListener('DOMContentLoaded', renderTable);
})();
