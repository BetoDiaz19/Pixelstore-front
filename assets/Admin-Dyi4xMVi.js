import{o as e,t}from"./jsx-runtime-DVpe7PXp.js";import{t as n}from"./react-ByFLoWig.js";import{t as r}from"./axios-CzlcZHrn.js";import{t as i}from"./sweetalert2.all-DqkO2jlJ.js";var a=e(n(),1),o=e(i(),1),s=t();function c(){let[e,t]=(0,a.useState)([]),n=async()=>{try{t((await r.get(`https://pixelstore-back.onrender.com/api/games`)).data)}catch(e){console.error(e)}};(0,a.useEffect)(()=>{n()},[]);let i=async(e,t)=>{if((await o.default.fire({title:`¿Eliminar juego?`,text:t,icon:`warning`,showCancelButton:!0,confirmButtonText:`Eliminar`,cancelButtonText:`Cancelar`})).isConfirmed)try{let t=localStorage.getItem(`token`);await r.delete(`https://pixelstore-back.onrender.com/api/games/${e}`,{headers:{Authorization:`Bearer ${t}`}}),o.default.fire({icon:`success`,title:`Juego eliminado`}),n()}catch(e){console.error(e),o.default.fire({icon:`error`,title:`Error al eliminar`})}},c=async()=>{let{value:e}=await o.default.fire({title:`Agregar Juego`,html:`
      <div style="
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:12px;
        margin-top:15px;
      ">

        <input
          id="titulo"
          class="swal2-input"
          placeholder="🎮 Título"
          style="margin:0;width:100%;"
        >

        <select
          id="categoria"
          class="swal2-input"
          style="margin:0;width:100%;"
        >
          <option value="RPG">🧙 RPG</option>
          <option value="Acción">⚔️ Acción</option>
          <option value="Deportes">⚽ Deportes</option>
          <option value="Ciencia Ficción">🚀 Ciencia Ficción</option>
          <option value="Carreras">🏎️ Carreras</option>
          <option value="Terror">👻 Terror</option>
        </select>

        <input
          id="precio"
          type="number"
          class="swal2-input"
          placeholder="💲 Precio"
          style="margin:0;width:100%;"
        >

        <input
          id="stock"
          type="number"
          class="swal2-input"
          placeholder="📦 Stock"
          style="margin:0;width:100%;"
        >

      </div>

      <input
        id="imagen"
        class="swal2-input"
        placeholder="🖼️ URL de Imagen"
      >

      <textarea
        id="descripcion"
        class="swal2-textarea"
        placeholder="📝 Descripción del videojuego"
      ></textarea>

      <div style="
        margin-top:15px;
        padding:10px;
        border-radius:12px;
        background:#111827;
      ">
        <img
          id="preview"
          src=""
          style="
            width:100%;
            max-height:250px;
            object-fit:contain;
            border-radius:10px;
            display:none;
          "
        >
      </div>
      `,didOpen:()=>{let e=document.getElementById(`imagen`),t=document.getElementById(`preview`);e.addEventListener(`input`,()=>{t.src=e.value,t.style.display=e.value?`block`:`none`})},showCancelButton:!0,confirmButtonText:`Guardar`,cancelButtonText:`Cancelar`,preConfirm:()=>({titulo:document.getElementById(`titulo`).value,categoria:document.getElementById(`categoria`).value,precio:Number(document.getElementById(`precio`).value),stock:Number(document.getElementById(`stock`).value),imagen:document.getElementById(`imagen`).value,descripcion:document.getElementById(`descripcion`).value})});if(e)try{let t=localStorage.getItem(`token`);await r.post(`https://pixelstore-back.onrender.com/api/games`,e,{headers:{Authorization:`Bearer ${t}`}}),o.default.fire({icon:`success`,title:`Juego agregado`}),n()}catch(e){console.error(e),o.default.fire({icon:`error`,title:`Error al guardar`})}},l=async e=>{let{value:t}=await o.default.fire({title:`Editar Juego`,html:`
        <div style="
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:12px;
          margin-top:15px;
        ">

          <input
            id="titulo"
            class="swal2-input"
            value="${e.title}"
            placeholder="🎮 Título"
            style="margin:0;width:100%;"
          >

          <select
            id="categoria"
            class="swal2-input"
            style="margin:0;width:100%;"
          >
            <option value="RPG"
              ${e.category===`RPG`?`selected`:``}>
              🧙 RPG
            </option>

            <option value="Acción"
              ${e.category===`Acción`?`selected`:``}>
              ⚔️ Acción
            </option>

            <option value="Deportes"
              ${e.category===`Deportes`?`selected`:``}>
              ⚽ Deportes
            </option>

            <option value="Ciencia Ficción"
              ${e.category===`Ciencia Ficción`?`selected`:``}>
              🚀 Ciencia Ficción
            </option>

            <option value="Carreras"
              ${e.category===`Carreras`?`selected`:``}>
              🏎️ Carreras
            </option>

            <option value="Terror"
              ${e.category===`Terror`?`selected`:``}>
              👻 Terror
            </option>
          </select>

          <input
            id="precio"
            type="number"
            class="swal2-input"
            value="${e.price}"
            placeholder="💲 Precio"
            style="margin:0;width:100%;"
          >

          <input
            id="stock"
            type="number"
            class="swal2-input"
            value="${e.stock}"
            placeholder="📦 Stock"
            style="margin:0;width:100%;"
          >

        </div>

        <input
          id="imagen"
          class="swal2-input"
          value="${e.image}"
          placeholder="🖼️ URL Imagen"
        >

        <div style="
          margin-top:15px;
          padding:10px;
          border-radius:12px;
          background:#111827;
        ">
          <img
            id="preview"
            src="${e.image}"
            style="
              width:100%;
              max-height:250px;
              object-fit:contain;
              border-radius:10px;
            "
          >
        </div>

        <textarea
          id="descripcion"
          class="swal2-textarea"
          placeholder="📝 Descripción"
        >${e.description}</textarea>
        `,didOpen:()=>{let e=document.getElementById(`imagen`),t=document.getElementById(`preview`);e.addEventListener(`input`,()=>{t.src=e.value})},showCancelButton:!0,confirmButtonText:`Guardar`,cancelButtonText:`Cancelar`,preConfirm:()=>({titulo:document.getElementById(`titulo`).value,categoria:document.getElementById(`categoria`).value,precio:Number(document.getElementById(`precio`).value),stock:Number(document.getElementById(`stock`).value),imagen:document.getElementById(`imagen`).value,descripcion:document.getElementById(`descripcion`).value})});if(t)try{let i=localStorage.getItem(`token`);await r.put(`https://pixelstore-back.onrender.com/api/games/${e.id}`,t,{headers:{Authorization:`Bearer ${i}`}}),o.default.fire({icon:`success`,title:`Juego actualizado`}),n()}catch(e){console.error(e),o.default.fire({icon:`error`,title:`Error al actualizar`})}};return(0,s.jsxs)(`div`,{style:{padding:`30px`,maxWidth:`1200px`,margin:`0 auto`},children:[(0,s.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:`40px`},children:[(0,s.jsx)(`h1`,{style:{color:`#8b5cf6`,fontSize:`3rem`},children:`🎮 Panel de Administración`}),(0,s.jsx)(`p`,{style:{color:`#94a3b8`},children:`Gestiona los videojuegos de PixelStore`}),(0,s.jsx)(`button`,{onClick:c,style:{marginTop:`20px`,background:`linear-gradient(135deg,#7c3aed,#6366f1)`,border:`none`,color:`white`,padding:`14px 28px`,borderRadius:`12px`,cursor:`pointer`,fontWeight:`bold`,fontSize:`1rem`},children:`➕ Agregar Juego`})]}),(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`15px`},children:e.map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,background:`#111827`,border:`1px solid #374151`,borderRadius:`16px`,padding:`15px`,gap:`20px`},children:[(0,s.jsx)(`img`,{src:e.image,alt:e.title,style:{width:`120px`,height:`160px`,objectFit:`contain`,borderRadius:`10px`,background:`#0f172a`}}),(0,s.jsxs)(`div`,{style:{flex:1},children:[(0,s.jsx)(`h3`,{style:{color:`white`},children:e.title}),(0,s.jsx)(`p`,{style:{color:`#a78bfa`},children:e.category}),(0,s.jsxs)(`p`,{style:{color:`#22c55e`,fontWeight:`bold`,fontSize:`1.2rem`},children:[`$`,e.price]}),(0,s.jsxs)(`div`,{style:{display:`inline-block`,marginTop:`10px`,padding:`6px 12px`,borderRadius:`20px`,background:e.stock>10?`#14532d`:e.stock>0?`#78350f`:`#7f1d1d`,color:`white`,fontWeight:`bold`},children:[`📦 Stock: `,e.stock]})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,s.jsx)(`button`,{onClick:()=>l(e),style:{background:`linear-gradient(135deg,#7c3aed,#6366f1)`,color:`white`,border:`none`,padding:`12px 18px`,borderRadius:`10px`,cursor:`pointer`,fontWeight:`bold`},children:`✏️ Editar`}),(0,s.jsx)(`button`,{onClick:()=>i(e.id,e.title),style:{background:`#dc2626`,color:`white`,border:`none`,padding:`12px 18px`,borderRadius:`10px`,cursor:`pointer`,fontWeight:`bold`},children:`🗑️ Eliminar`})]})]},e.id))})]})}export{c as default};