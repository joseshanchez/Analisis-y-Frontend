const RenderModel= {
    listaProveedor:{
    type: 'object',
    optional: true,
    isArray: true,
    item:{
      type:'object',
      optional: true,
      properties:{
        empresa:{
          type: 'string',
          optional: true,
        },
        tituloProducto:{
          type: 'string',
          optional: true,
        },
        descripcion:{
            type: 'string',
            optional: true,
          },
          Precio:{
            type: 'string',
            optional: true,
          },
          imagen:{
            type: 'string',
            optional: true,
          },
          moneda:{
            tyep:'string',
            optional: true,
          }
      },
    },
  },
};

export default RenderModel;