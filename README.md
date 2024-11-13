--Objetivos de las Pruebas--

Validar la funcionalidad: Asegurar que cada endpoint de la API responde correctamente a las solicitudes esperadas.

Evaluar el rendimiento: Determinar la capacidad de la API para manejar múltiples solicitudes concurrentes sin degradación significativa del rendimiento.

Comprobar la seguridad: Garantizar que la API protege adecuadamente los datos sensibles y restringe el acceso no autorizado.


1.Registro de un Nuevo Estudiante

Descripción: Verificar que la API permite registrar un nuevo estudiante con datos válidos.
Método HTTP: POST
Endpoint: /api/estudiantes
Datos de Entrada:
{
  "nombre": "Juan Pérez",
  "edad": 20,
  "correo": "juan.perez@example.com"
}

-Resultado Esperado: Código de estado 201 (Creado) y retorno de los datos del estudiante registrado con un id único asignado.

-Resultado Teórico: La API responde con un código 201 y los datos del estudiante, incluyendo el id asignado.


2.Consulta de Información de un Estudiante Existente

Descripción: Verificar que la API retorna correctamente la información de un estudiante existente al proporcionar un id válido.
Método HTTP: GET
Endpoint: /api/estudiantes/{id}
Parámetros:
id: 1

-Resultado Esperado: Código de estado 200 (OK) y retorno de los datos del estudiante correspondiente al id proporcionado.

-Resultado Teórico: La API responde con un código 200 y los datos del estudiante con id 1.



3.Actualización de Datos de un Estudiante

Descripción: Verificar que la API permite actualizar la información de un estudiante existente.
Método HTTP: PUT
Endpoint: /api/estudiantes/{id}
Parámetros:
id: 1

Datos de Entrada:
{
  "nombre": "Juan Pérez",
  "edad": 21,
  "correo": "juan.perez@example.com"
}

-Resultado Esperado: Código de estado 200 (OK) y retorno de los datos actualizados del estudiante.

-Resultado Teórico: La API responde con un código 200 y los datos actualizados del estudiante con id 1.


4.Eliminación de un Estudiante

Descripción: Verificar que la API permite eliminar un estudiante existente al proporcionar un id válido.
Método HTTP: DELETE
Endpoint: /api/estudiantes/{id}
Parámetros:
id: 1.

-Resultado Esperado: Código de estado 204 (Sin Contenido) indicando que la eliminación fue exitosa.

-Resultado Teórico: La API responde con un código 204 y el estudiante con id 1 es eliminado de la base de datos.


--Casos de Prueba de Rendimiento--

1.Prueba de Carga con Múltiples Solicitudes Concurrentes

Descripción: Evaluar el comportamiento de la API al recibir 100 solicitudes concurrentes para registrar nuevos estudiantes.
Método HTTP: POST
Endpoint: /api/estudiantes
Datos de Entrada: Datos válidos de estudiantes.

-Resultado Esperado: La API maneja todas las solicitudes con un tiempo de respuesta promedio inferior a 2 segundos y sin errores.

-Resultado Teórico: La API procesa las 100 solicitudes concurrentes con éxito, manteniendo un tiempo de respuesta promedio de 1.5 segundos.


2.Prueba de Estrés Incrementando Gradualmente la Carga

Descripción: Determinar el punto de falla de la API incrementando gradualmente el número de solicitudes concurrentes hasta que la API no pueda manejar la carga.
Método HTTP: GET
Endpoint: /api/estudiantes

-Resultado Esperado: Identificar el número máximo de solicitudes concurrentes que la API puede manejar antes de que el tiempo de respuesta supere los 5 segundos o se produzcan errores.

-Resultado Teórico: La API maneja hasta 500 solicitudes concurrentes con un tiempo de respuesta aceptable; a partir de 501 solicitudes, el tiempo de respuesta supera los 5 segundos.


--Casos de Prueba de Seguridad--

1.Acceso No Autorizado a Endpoints Protegidos

Descripción: Verificar que la API restringe el acceso a endpoints protegidos cuando no se proporciona un token de autenticación válido.
Método HTTP: GET
Endpoint: /api/estudiantes
Encabezados: Sin token de autenticación.

-Resultado Esperado: Código de estado 401 (No Autorizado) indicando que el acceso está restringido.

-Resultado Teórico: La API responde con un código 401 y un mensaje de error indicando que se requiere autenticación.

2.Inyección SQL en Parámetros de Entrada

Descripción: Evaluar la resistencia de la API a ataques