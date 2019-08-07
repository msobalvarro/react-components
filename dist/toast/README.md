# Componente Toast
Componente que muestras mensajes rápidos con el objetivo que el usuario sea notificado de un evento.

---

**Forma de uso**
Primeramente tendremos que renderizar el componente y agregarle una refrencia.

```jsx
<Toast ref={e => this.toast = e} />
```

Ya con la referencia creada podremos ejecutar el metodo `show`.


```jsx
showMessage() {
    this.toast.show()
}
```

Este metodo `show()` recibe dos parametros, el primero es un titulo y el segundo es una descripción.

```jsx
showMessage() {
    this.toast.show('Titulo toast', 'Pequeña descripción')
}
```

El toast _se oculta automanticamente_, pero si queremos ocultarlo rapidamente y ejecutarlo nuevamente, primero debemos ejecutar `this.toast.hiddenFast()` y despues mostar el `this.toast.show('tit..', 'desc..')`