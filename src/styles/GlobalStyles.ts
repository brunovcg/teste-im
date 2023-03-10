import { createGlobalStyle } from 'styled-components';
import imConfigs from '../configs/imConfigs';
import ROBOTO_BOLT from '@/assets/fonts/roboto/Roboto-Bold.ttf';
import ROBOTO_ITALIC from '@/assets/fonts/roboto/Roboto-Italic.ttf';
import ROBOTO_MEDIUM from '@/assets/fonts/roboto/Roboto-Medium.ttf';
import ROBOTO_MEDIUM_ITALIC from '@/assets/fonts/roboto/Roboto-MediumItalic.ttf';
import ROBOTO_REGULAR from '@/assets/fonts/roboto/Roboto-Regular.ttf';

const { maxWidth } = imConfigs.screenBreakPoints;

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: RobotoCondensed;
    src:  url('${ROBOTO_BOLT}'),
          url('${ROBOTO_ITALIC}'),
          url('${ROBOTO_MEDIUM}'),
          url('${ROBOTO_MEDIUM_ITALIC}'),
          url('${ROBOTO_REGULAR}');
  }

  :root {
    --primary: #11A2DD;
    --secondary: #E12F26;

    --error: #E12F26;;

    --border: #dbdbdb;
    --border-hover:  #11A2DD;
    --border-focus: #c1c1c1;
    --disabled: #ccc;

    --typeface-dark: #111;
    --typeface-medium: #444;
    --typeface-light: #888;
    --typeface-disabled: #ccc;
    --typeface-white: #fcfcfc;

    --surface-dark: #dbdbdb;
    --surface-regular: #eaeaea;
    --surface-medium: #F0F0F0;
    --surface-light: #F7F7F7;
    --surface-white: #fff;

    --placeholder: #aaa;

    --gradient-drawer: linear-gradient(0deg, #fff 0%, #fff 50%, #fff 100%);

    --hiperlink: #0961B9;

    --box-shadow-dark: 10px 15px 15px 0px rgba(150, 150, 150, 1);
    --box-shadow-light: 5px 5px 10px 0px rgba(150, 150, 150, 0.4);

    
  }

  .App{
    height: 100vh;
    max-width: ${maxWidth};
    margin: 0 auto;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      vertical-align: baseline;
      font-family: Roboto, sans-serif;

    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1;
        background-color: var(--typeface-medium)
    }

    ol, ul {
	    list-style: none;
    }

    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
    }

`;

export default GlobalStyle;
