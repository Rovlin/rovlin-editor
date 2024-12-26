export const ElementConfig = {
    'text':{
        type:'text',
        config:{
            styles:{
                color: 'black',
                backgroundColor: 'transparent',
                fontSize:'15px',
                fontWeight:400,
                fontStyle:'normal',
                textDecoration:'none',
                textAlign:'left'
            },
            content:'Text'
        }
    },
    'link':{
        type:'link',
        config:{
            styles:{
                color: 'black',
                backgroundColor: 'transparent',
                fontSize:'15px',
                fontWeight:400,
                fontStyle:'normal',
                textDecoration:'none',
                textAlign:'left'
            },
            content:'Link',
            link:''
        }
    },
    'button':{
        type:'button',
        config:{
            styles:{
                container:{
                    textAlign:'center',
                },
                button:{
                    color: 'white',
                    backgroundColor: '#39bfbf',
                    fontSize:'15px',
                    fontWeight:400,
                    padding:'9px 20px 10px',
                    fontStyle:'normal',
                    textDecoration:'none',
                    borderColor:'black',
                    borderRadius:'4px',
                },
            },
            content: 'Button'

        }
    },
    'list':{
        type:'list',
        config:{
            styles:{
                container:{
                    textAlign:'left',
                },
                list:{
                    color:'black',
                    fontSize:'15px',
                    fontWeight:400,
                    fontStyle:'normal',
                },
            },
            content:['List Item 1','List Item 2','List Item 3']
        }
    },
    'image':{
        type:'image',
        config:{
            styles:{
                container:{
                    justifyContent:'center',
                },
                image:{
                    height:"250px",
                    width:"250px"
                },
            },
            src:'https://active-asics.de/wp-content/plugins/breedr/assets/no-image-available.png'
        }
    },
    'audio':{
        type:'audio',
        config:{
            styles:{
                container:{
                    justifyContent:'center',
                },
                audio:{
                    height:"54px",
                    width:"300px"
                },
            },
            src:'',
            fileName:""
        }
    },
    'video':{
        type:'video',
        config:{
            styles:{
                container:{
                    justifyContent:'center',
                },
                video:{
                    height:"300px",
                    width:"450px"
                },
            },
            src:'',
            fileName:""
        }
    },
    'divider': {
        type: 'divider',
        config: {
            styles: {
                container: {
                    borderBottom: '2px solid black'
                },
                title: {
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    textAlign: 'center'
                },
                icon: {
                    textAlign: 'center'
                },

            },
            title: 'Divider',
            iconUrl: 'URL_TO_DIVIDER_ICON'
        }
    },
  font: {
    type: "font",
    config: {
      styles: {
        fontFamily: "Arial",
        fontSize: "16px",
        fontWeight: 400,
        fontStyle: "normal",
        textAlign: "left",
        color: "black",
        backgroundColor: "transparent",
      },
      content: "This is a font element",
    },
  },
};
