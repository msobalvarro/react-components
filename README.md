# Web TDAcore

**Estructura de desarrollo**
El entorno de trabajo estará compuesta de una carpeta `/login` y una carpeta de `/static`.

**Carpeta Login**

 - static
	 - css
		 - *main.css*
	 - dev **(carpeta de desarrollo)**
		 - robot
			 - *estilos-robot.css*
			 - *index.jsx*
		 - *app.main.js* **(Archivo `js` principal)**
		 - *login.css* **(Archivo `css` de desarrollo)**
	 - fonts
		 - *SourceCodePro-Medium.woff* **(Fuente principal)**
	 - js
		 - *script.js* **(bundle final compilado de la carpeta dev)**

Esta es la estructura básica que se debe de manejar en el proyecto.

## Proyecto principal

El la carpeta de desarrollo `/static/dev` principal de la web TDAcore estará estructurada por vista, componentes y el archivo principal.


**Carpeta `Components`**
Esta deberá estar estructurada por sub carpetas, estas sub carpetas deberán llamarse con el nombre del componente, ejemplo:
```jsx
import Textinput from './components/textinput'
```
La carpeta del componente deberán estar mínimo un archivo, este archivo será llamado `index.jsx`, y si se require deberá tener un archivo adjunto de estilos, este archivo de estilos deberá tener un standard de nombre conformado por **estilos-[nombre del componente].css**. Ejemplo:

```jsx
// archivo: component/textinput/index.jsx

import React, { Component } from 'react'

// Importacion dentro de la misma carpeta
import 'estilos-textinput.css' 

```
**Carpeta `Views`**
Esta carpeta al igual de **components**  deberá tener una estructura similar, conformado por sub carpetas nombradas por el nombre de la vista, un ejemplo:

 - **/Inicio**
	 - `index.jsx` (Archivo principal)
	 - `estilos-inicio.css` (Archivo principal de estilos para `index.jsx`)

Los archivos de estilos también deberá de tener la misma estructura: **`estilos-[nombre de la vista].css`**.


## Reglas de códigos

Al hacer una importación de `react`, y su su clase `component` deberá importarse de manera mas eficaz a como el siguiente ejemplo:

```jsx
import React, { Component } from 'react'
class MyComponent extends Component {}...
```

Esto es para evitar crear una clase con `React.Component`

**Cuando usar `Component` y `PureComponent`**
Si tenemos un componente que no tendrá un estado (`state`) que solo es para un componente de diseño o algo similar deberá crearse con una **Arrow Function**. 
Por ejemplo:

    const Item = (props) => { ... return (..) }

Si el componente tiene un estado incial, pero no cambiará constantemente deberemos usar un `PureComponent` para extender una clase.

De lo contrario, si tenemos un componente que deberá estar escuchando cambios de tender en cualquier momento y circunstancia debemos ocupar `Component`.

**Reglas de variables y constantes**
 - Evitar usar la palabra reservada `var`, reemplazarla por `let`
 - Usar constantes cuando sea justo y necesario.

**Reglas para desarrollar Componentes Personalizados**
* Para desarrollar un componente debemos saber cuando utilizar un `PureComponent` ó `Component`.

Nunca utilizar:

```js
constructor()  { 
	super()
}
```
    
Cuando no ocuparemos los `props` de ese componente.

> **Si el componente se estructura nada mas por un `Render()`deberemos de convertir la clase a una `Arrow Function`**

 1. Cuando un componente necesita ser separado en dos partes de código por tema de complejidad de diseño y no será reutilizado por otros componentes, deberá ser creado en el mismo archivo.

**Estados en React**
Los estados en react deberán ocuparse solamente si:
 -  Cuando necesitamos renderizar un dato.
 - Procesar datos en memoria.
 - Datos que se ocupara en el ciclo de vida del componente.

**Subir cambios**
Los cambios al servidor **(Control de versiones `GIT`)** deberán ser en la rama local con nombre de usuario, después de subir cambios en la rama `nombre de usuario` deberán subir cambios en la rama `web`.


**Comentarios**
Todos los métodos deberán ser comentados en la parte de arriba, sin algun tipo de entree-espaciado, evitemos los comentarios de doble pleca `// Comentario`.

Reglamentariamente la forma correcta de comentar será de la siguiente manera:
```js
/** Este metodo oculta el elemento del DOM */
hidden = () => { ..
````

De esta manera se deberá tratar a las variables o constantes **(Las constantes obligatoriamente deberán contener un comentario)** con nombres fuera del contexto, por ejemplo:
```js
/** la constante x representa la cantidad de datos a renderizar */
const x = 10
let data = [...{}]
```