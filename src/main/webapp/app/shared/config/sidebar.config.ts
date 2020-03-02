export class SideBarConfig {
  public defaults: any = {
    aside: {
      self: {},
      items: [
        {
          title: 'Principal',
          root: true,
          icon: 'flaticon2-architecture-and-city',
          page: '/dashboard',
          translate: 'MENU.DASHBOARD',
          bullet: 'dot'
        },

        /* {section: 'Configuración'}, */

        {
          title: 'Seguridad',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-protected', // 'flaticon2-list-2'  'flaticon2-expand'
          /* 				    permission: 'ModuloSeguridad',
           */ submenu: [
            {
              title: 'Usuarios',
              page: '/seguridad/usuarios'
              /* 							permission: 'FormularioUsuarios' */
            },
            {
              title: 'Roles',
              page: '/seguridad/roles'
              /* 						    permission: 'FormularioRoles'
               */
            }
          ]
        },
        {
          title: 'Master',
          root: true,
          bullet: 'dot',
          icon: 'flaticon-settings', // 'flaticon2-list-2'  'flaticon2-expand'
          /* 				    permission: 'ModuloMaster',
           */ submenu: [
            {
              title: 'Conceptos',
              page: ''
              /* 							permission: 'FormularioConceptos'
               */
            },
            {
              title: 'Tipo de Comprobantes',
              page: ''
              /* 						    permission: 'FormularioTipodeComprobantes'
               */
            },
            {
              title: 'Tipo de Entes',
              page: '',
              permission: 'FormularioTipodeEntes'
            },
            {
              title: 'Tipo de Rubro',
              page: '',
              permission: 'FormularioTipodeRubro'
            },
            {
              title: 'Tipo de Concepto Bancario',
              page: '',
              permission: 'FormularioTipodeConceptosBancarios'
            }
          ]
        },

        /* {section: 'Gestión'}, */

        {
          title: 'Deudas',
          root: true,
          bullet: 'dot',
          icon: 'flaticon-clipboard', // 'flaticon2-list-2'  'flaticon2-expand'
          /*    permission: 'ModuloDeudas',  */

          badge: {
            type: 'kt-badge--danger',
            value: '5'
          },
          submenu: [
            {
              title: 'Comprobantes de Deuda',
              page: '/deuda/comprobanteDeuda'
              /* 							permission: 'FormularioComprobantesporDeuda'
               */
            },
            {
              title: 'Lotes de Deuda',
              page: '/deuda/lotesDeuda'
              /* 						    permission: 'FormularioComprobantesporImportaciondeDeuda'
               */
            },
            {
              title: 'Notas de Créditos',
              page: '/deuda/notaCredito'
              /* 						    permission: 'FormularioComprobantesporNotasdeCreditos'
               */
            },
            {
              title: 'Notas de Débitos',
              page: '/deuda/notaDebito'
              /* 						    permission: 'FormularioComprobantesporNotasdeDebitos'
               */
            },
            {
              title: 'Ajuste de Saldo',
              page: '/deuda/ajusteSaldo'
              /* 						    permission: 'FormularioAjustesdeSaldo'
               */
            }
          ]
        }
      ]
    }
  };

  public get configs(): any {
    return this.defaults;
  }
}
