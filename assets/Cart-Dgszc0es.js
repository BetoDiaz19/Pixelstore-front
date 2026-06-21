import{o as e,t}from"./jsx-runtime-DVpe7PXp.js";import{C as n,i as r,n as i,r as a}from"./index-Dxmxv2C-.js";import{t as o}from"./axios-CzlcZHrn.js";import{t as s}from"./sweetalert2.all-DqkO2jlJ.js";var c=e(s(),1),l=t();function u(){let{user:e}=r(),t=n(),{cartItems:s,removeFromCart:u,clearCart:d}=a(),f=s.reduce((e,t)=>e+Number(t.price),0);return(0,l.jsx)(`div`,{className:`page-animation`,children:(0,l.jsxs)(`div`,{className:`cart-page`,children:[(0,l.jsx)(`h1`,{className:`cart-title`,children:`Mi Carrito`}),(0,l.jsx)(`hr`,{}),s.length===0?(0,l.jsx)(`h2`,{children:`Tu carrito está vacío`}):(0,l.jsxs)(l.Fragment,{children:[s.map(e=>(0,l.jsxs)(`div`,{className:`cart-item`,children:[(0,l.jsx)(`img`,{src:e.image,alt:e.title}),(0,l.jsxs)(`div`,{className:`cart-info`,children:[(0,l.jsx)(`h3`,{children:e.title}),(0,l.jsx)(`p`,{children:e.category}),(0,l.jsxs)(`h4`,{children:[`$`,e.price]}),(0,l.jsxs)(`p`,{children:[`Stock disponible: `,e.stock]})]}),(0,l.jsx)(`button`,{className:`remove-btn`,onClick:()=>u(e.id),children:`Eliminar`})]},e.id)),(0,l.jsx)(`hr`,{}),(0,l.jsxs)(`h2`,{className:`cart-total`,children:[`Total: $`,f.toFixed(2)]}),(0,l.jsx)(`button`,{className:`detail-btn`,onClick:async()=>{if(!e){i.error(`Debes iniciar sesión para comprar`);return}if(s.length===0){i.error(`Tu carrito está vacío`);return}let n=s.find(e=>e.stock<=0);if(n){i.error(`${n.title} ya no tiene stock`);return}let r=s.map(e=>`<li style="margin-bottom:8px">
          ${e.title} - $${e.price}
        </li>`).join(``);if((await c.default.fire({title:`🎮 Confirmar Compra`,html:`
      <div style="text-align:left">

        <h3>Resumen del pedido</h3>

        <ul>
          ${r}
        </ul>

        <hr>

        <h2>
          Total: $${f.toFixed(2)}
        </h2>

      </div>
    `,icon:`question`,showCancelButton:!0,confirmButtonText:`Confirmar Compra`,cancelButtonText:`Cancelar`})).isConfirmed)try{await o.post(`https://pixelstore-back.onrender.com/api/ventas`,{usuario_id:e.id,productos:s}),d(),await c.default.fire({icon:`success`,title:`🎉 Compra realizada`,text:`Tu pedido ha sido registrado correctamente.`}),t(`/history`)}catch(e){console.error(e),c.default.fire({icon:`error`,title:`Error`,text:`No se pudo procesar la compra`})}},children:`Finalizar Compra`})]})]})})}export{u as default};