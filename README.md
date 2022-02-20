# Codespace

Codespace es un proyecto que consiste en una tienda online de codigo fuente en la cual tengo pensado en hacer por suscripcion para nuestros usuarios y por pago unico para los clientes, te explico:

- [x] La suscripcion sera para personas que quieran vender su codigo, sera solo el codigo y por su puesto tienen que tener si o si una demo.

  - El monto es basicamente por el alojamiento en .rar o .zip del aws s3 de todo el codigo y obviamente sus datos en mongo

  - Estos codigos, no se todavia, tengo que conversar con Nima (segundo lider del proyecto), pero creo que si van a ser revisados para que no haya nada ilegal en su venta ademas que claramente chequeamos el codigo xd, eso si no se hasta que punto se pueda, aunque tu sabes Google lo hace con Android que dice que es gratis crear tu aplicación pero ellos la revisan para aprobarlo, entonces se copian de tu codigo, pero bueno...

  - La suscripción se hara por paypal cada mes, el monto todavía lo estamos decidiendo

  - Yo estado pensando que pudiera haber dos tipos de suscripcion, uno que sea mensual por el alojamiento y otro que descuente por cada venta de proyecto pero haya un inicial, no se cual conviene bro porque muchos no tendran para pagar mensual. La diferencia entre estos dos es que claramente la primera no cobraremos por proyecto vendido sera todo para el usuario y el segundo si nos corresponde un porcentaje, ademas de un inicial.

  | Beneficios                | Suscripcion mensual | Suscripcion por proyecto  |
  | ------------------------- | ------------------- | ------------------------- |
  | Pago inicial              | No                  | Si                        |
  | Pago mensual              | Si                  | No                        |
  | Pago por proyecto         | No                  | Si                        |
  | Limite subida proyectos\* | No                  | Si ( 1000 puntos = 10 ↑ ) |

  - Explicación: Si se va a cobrar un porcentaje por proyecto vendido vamos a hacer como los vendedores hacen, que el usuario venda por ejemplo 1 proyecto de 3000 dolares nosotros cobramos el 10% son 300 dolares, ese monto sera un total recaudado para nosotros y el usuario lo vera como puntos, por cada 1000 puntos podra subir 10 proyectos mas, si no se hace esto el usuario va a almacenar y almacenar y si no vende nada no nos conviene, el inicial que se paga es de hecho por almacenar los 10 primeros proyectos que puede ingresar, si puede vender algo bacan y sino igual nos quedamos con codigo y con un pago para pagar el almacenamiento

  - No solo podria hacerse puntos por pago sino por estrellas u otros pero ese modelo esta por verse tu que opinas

  | Beneficios            | Puntos       |
  | --------------------- | ------------ | ----------------------------- |
  | $1                    | 1            |
  | Puntaje > 3 estrellas | +10,+20,+50  | -> 3 = 10, 4 = 20, 5 = 50     |
  | Puntaje > 10 likes    | +5,+10,etc   | -> 10 = 5, 20 = 10, etc       |
  | Monto dinero > $1000  | +50,+100,etc | -> 1000 = 50, 2000 = 100, etc |

- [x] El pago unico sera que compras el codigo y lo tendras, ya que se usar aws s3 ese sera el droplet del codigo en rar o en zip, el archivo se va a subir como binario para que puedan descargarlo y tendra un tiempo de expiración del link de 5 segundos. Va a ser una descarga directa despues de pagar con paypal, se obtendra el link de descarga y se enviara por correo su boleta de pago

## Comenzando 🚀

Mira **Despliegue ** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

- Instalar node
- Instalar angular
- Instalar REST Client para usar la carpeta api, se puede usar POSTMAN con las urls brindadas en los archivos

### Instalación 🔧

**FRONTED**

```
cd client
```

```
npm i
```

## Despliegue 📦

### Api con json-server

> Para que no tengas que descargar mongodb

```
npm run json
```

### Entorno staging con json-server (**JUAN**)

> Hay tres entornos: development con mongodb, staging con json-server y production con mongo atlas. Usaras el de staging para json-server

```
cd client
```

```
ng s --configuration staging
```

### Entorno development

> Con mongodb instalado, base de datos local

```
cd client
```

```
ng s
```

## Construido con 🛠️

- API: Puedes probar con postman pero tienes una carpeta api (se necesita extension REST Client de vscode) para que lo pruebes
- FRONTED: Usara Angular para pagina principal y el dashboard (como proyecto aparte), Angular Universal para el SEO, le agregare despues Analytics de Google
- BACKEND: Usara NodeJs, MongoDB, AWS-S3, Cloudinary y si es posible a un futuro AWS-EC2, por mientras Heroku esta bien

## Contribuyendo 🖇️

En el fronted se contribuye en la carpeta client en el archivo CONTRIBUTING.md, donde te dire lo que me falta
