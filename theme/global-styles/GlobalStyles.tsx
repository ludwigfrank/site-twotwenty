import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.colorSurfaceBackground};
    margin: 0;
  }

  @font-face {
    font-family: 'Sohne Mono';
    src: url('../../public/static/fonts/SohneMono-Buch.woff2') format('woff2'),
        url('../../public/static/fonts/SohneMono-Buch.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
      font-family: 'Sohne Schmal';
      src: url('../../public/static/fonts/SohneSchmal-Dreiviertelfett.woff2') format('woff2'),
          url('../../public/static/fonts/SohneSchmal-Dreiviertelfett.woff') format('woff');
      font-weight: bold;
      font-style: normal;
  }

  /* Masonry Grid */
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -24px; /* gutter size offset */
    width: auto;
    margin-top: 80px;
  }

  .my-masonry-grid_column {
    padding-left: 24px; /* gutter size */
    background-clip: padding-box;
  }
  
  /* Style your items */
  .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 24px;
  }

@keyframes red{
    0% {-webkit-transform: rotate(0deg) translate(-40px) rotate(0deg) scale(1,1);}
    50% {-webkit-transform: rotate(-180deg) translate(-40px) rotate(-180deg) scale(1,1.33);}
    100% {-webkit-transform: rotate(-360deg) translate(-40px) rotate(-360deg) scale(1,1);}
}

@keyframes green{
    0% {-webkit-transform: rotate(0deg) translate(30px) rotate(0deg) scale(1,1);opacity:1}
    66% {-webkit-transform: rotate(180deg) translate(30px) rotate(-180deg) scale(1,1.33);opacity:.33}
    100% {-webkit-transform: rotate(360deg) translate(30px) rotate(-360deg) scale(1,1);opacity:1}
}

@keyframes blue{
    0% {-webkit-transform: rotate(0deg) translate(30px) rotate(0deg) scale(1,1);}
    33% {-webkit-transform: rotate(180deg) translate(30px) rotate(-180deg) scale(1.66,1);}
    100% {-webkit-transform: rotate(360deg) translate(30px) rotate(-360deg) scale(1,1);}
}

#red,
#green,
#blue{
    position:fixed;
    top:50%;
    left:50%;
    width:600px;
    height:600px;
    margin:-300px 0 0 -300px;
}
#red{
    animation:7s red linear infinite;
    background-image: -moz-radial-gradient(50% 50%, circle contain, rgba(222, 75, 218, .75), rgba(222, 75, 218, 0) 100%);
    background-image: -webkit-radial-gradient(50% 50%, circle contain, rgba(222, 75, 218, .75), rgba(222, 75, 218, 0) 100%);         
}
#blue{
    animation:blue 6s linear infinite;
    background-image: -webkit-radial-gradient(50% 50%, circle contain, rgba(86, 173, 223, .75), rgba(86, 173, 223, 0) 100%);
    background-image: -moz-radial-gradient(50% 50%, circle contain, rgba(86, 173, 223, .75), rgba(86, 173, 223, 0) 100%);           
}

.blue-gradient {
    animation:blue 6s linear infinite;
    background: red;
    background-image: -webkit-radial-gradient(50% 50%, circle contain, rgba(86, 173, 223, .75), rgba(86, 173, 223, 0) 100%);
    background-image: -moz-radial-gradient(50% 50%, circle contain, rgba(86, 173, 223, .75), rgba(86, 173, 223, 0) 100%);           
}
#green{
    animation:green 8s linear infinite;
    background-image: -webkit-radial-gradient(50% 50%, circle contain, rgba(210, 222, 12, .75), rgba(210, 222, 12, 0) 100%);
    background-image: -moz-radial-gradient(50% 50%, circle contain, rgba(210, 222, 12, .75), rgba(210, 222, 12, 0) 100%);          
}
`

const red = '222, 75, 218'
