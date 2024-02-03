class ThemeSwitcher extends HTMLElement {
    /*
        Extracted from https://github.com/nashamri/spacemacs-theme/blob/master/spacemacs-theme.el with AI assistant check
        check the repo and give your start if you copy a line from here

     */

    colors = {
        dark: {
            'act1': '#222226',
            'act2': '#5d4d7a',
            'base': '#b2b2b2',
            'base-dim': '#686868',
            'bg1': '#292b2e',
            'bg2': '#212026',
            'bg3': '#100a14',
            'bg4': '#0a0814',
            'bg-alt': '#42444a',
            'border': '#5d4d7a',
            'cblk': '#cbc1d5',
            'cblk-bg': '#2f2b33',
            'cblk-ln': '#827591',
            'cblk-ln-bg': '#373040',
            'cursor': '#e3dedd',
            'const': '#a45bad',
            'comment': '#2aa1ae',
            'comment-light': '#2aa1ae',
            'comment-bg': '#292e34',
            'comp': '#c56ec3',
            'err': '#e0211d',
            'func': '#bc6ec5',
            'head1': '#ce537a',
            'head1-bg': '#293239',
            'head2': '#2d9574',
            'head2-bg': '#293235',
            'head3': '#67b11d',
            'head3-bg': '#293235',
            'head4': '#b1951d',
            'head4-bg': '#32322c',
            'highlight': '#444155',
            'highlight-dim': '#3b314d',
            'keyword': '#4f97d7',
            'lnum': '#44505c',
            'mat': '#86dc2f',
            'meta': '#9f8766',
            'str': '#2d9574',
            'suc': '#86dc2f',
            'ttip': '#9a9aba',
            'ttip-sl': '#5e5079',
            'ttip-bg': '#34323e',
            'type': '#ce537a',
            'var': '#7590db',
            'war': '#dc752f',
            'aqua': '#2d9574',
            'aqua-bg': '#293235',
            'green': '#67b11d',
            'green-bg': '#293235',
            'green-bg-s': '#29422d',
            'cyan': '#28def0',
            'red': '#f2241f',
            'red-bg': '#3c2a2c',
            'red-bg-s': '#512e31',
            'blue': '#4f97d7',
            'blue-bg': '#293239',
            'blue-bg-s': '#2d4252',
            'magenta': '#a31db1',
            'yellow': '#b1951d',
            'yellow-bg': '#32322c'
        },
        light: {
            'act1': '#e7e5eb',
            'act2': '#d3d3e7',
            'base': '#655370',
            'base-dim': '#a094a2',
            'bg1': '#fbf8ef',
            'bg2': '#efeae9',
            'bg3': '#e3dedd',
            'bg4': '#d2ceda',
            'bg-alt': '#efeae9',
            'cblk': '#655370',
            'cblk-bg': '#e8e3f0',
            'cblk-ln': '#9380b2',
            'cblk-ln-bg': '#ddd8eb',
            'cursor': '#100a14',
            'const': '#4e3163',
            'comment': '#2aa1ae',
            'comment-light': '#a49da5',
            'comment-bg': '#ecf3ec',
            'comp': '#6c4173',
            'err': '#e0211d',
            'func': '#6c3163',
            'head1': '#3a81c3',
            'head1-bg': '#edf1ed',
            'head2': '#2d9574',
            'head2-bg': '#edf2e9',
            'head3': '#67b11d',
            'head3-bg': '#edf2e9',
            'head4': '#b1951d',
            'head4-bg': '#f6f1e1',
            'highlight': '#d3d3e7',
            'highlight-dim': '#e7e7fc',
            'keyword': '#3a81c3',
            'lnum': '#a8a8bf',
            'mat': '#ba2f59',
            'meta': '#da8b55',
            'str': '#2d9574',
            'suc': '#42ae2c',
            'ttip': '#8c799f',
            'ttip-sl': '#c8c6dd',
            'ttip-bg': '#e2e0ea',
            'type': '#ba2f59',
            'var': '#715ab1',
            'war': '#dc752f',
            'aqua': '#67b11d',
            'aqua-bg': '#edf2e9',
            'green': '#67b11d',
            'green-bg': '#edf2e9',
            'green-bg-s': '#edf2e9',
            'cyan': '#2d9574',
            'red': '#e0211d',
            'red-bg': '#ecf3ec',
            'red-bg-s': '#ecf3ec',
            'blue': '#3a81c3',
            'blue-bg': '#edf1ed',
            'blue-bg-s': '#edf1ed',
            'magenta': '#6c4173',
            'yellow': '#b1951d',
            'yellow-bg': '#f6f1e1'
        },
        'solarized-dark': {
            'act1': '#073642',
            'act2': '#586e75',
            'base': '#839496',
            'base-dim': '#657b83',
            'bg1': '#002b36',
            'bg2': '#073642',
            'bg3': '#586e75',
            'bg4': '#657b83',
            'bg-alt': '#839496',
            'border': '#586e75',
            'cblk': '#073642',
            'cblk-bg': '#586e75',
            'cblk-ln': '#839496',
            'cblk-ln-bg': '#657b83',
            'cursor': '#839496',
            'const': '#073642',
            'comment': '#586e75',
            'comment-light': '#839496',
            'comment-bg': '#657b83',
            'comp': '#586e75',
            'err': '#dc322f',
            'func': '#839496',
            'head1': '#268bd2',
            'head1-bg': '#586e75',
            'head2': '#839496',
            'head2-bg': '#657b83',
            'head3': '#002b36',
            'head3-bg': '#073642',
            'head4': '#586e75',
            'head4-bg': '#657b83',
            'highlight': '#657b83',
            'highlight-dim': '#839496',
            'keyword': '#073642',
            'lnum': '#586e75',
            'mat': '#839496',
            'meta': '#657b83',
            'str': '#2aa198',
            'suc': '#859900',
            'ttip': '#586e75',
            'ttip-sl': '#839496',
            'ttip-bg': '#657b83',
            'type': '#dc322f',
            'var': '#839496',
            'war': '#cb4b16',
            'aqua': '#2aa198',
            'aqua-bg': '#073642',
            'green': '#859900',
            'green-bg': '#073642',
            'green-bg-s': '#073642',
            'cyan': '#2aa198',
            'red': '#dc322f',
            'red-bg': '#073642',
            'red-bg-s': '#073642',
            'blue': '#268bd2',
            'blue-bg': '#073642',
            'blue-bg-s': '#073642',
            'magenta': '#d33682',
            'yellow': '#b58900',
            'yellow-bg': '#073642'
        },
        'solarized-light': {
            'act1': '#eee8d5',
            'act2': '#93a1a1',
            'base': '#657b83',
            'base-dim': '#586e75',
            'bg1': '#fdf6e3',
            'bg2': '#eee8d5',
            'bg3': '#93a1a1',
            'bg4': '#839496',
            'bg-alt': '#657b83',
            'border': '#93a1a1',
            'cblk': '#eee8d5',
            'cblk-bg': '#93a1a1',
            'cblk-ln': '#657b83',
            'cblk-ln-bg': '#586e75',
            'cursor': '#657b83',
            'const': '#eee8d5',
            'comment': '#93a1a1',
            'comment-light': '#657b83',
            'comment-bg': '#586e75',
            'comp': '#93a1a1',
            'err': '#dc322f',
            'func': '#657b83',
            'head1': '#eee8d5',
            'head2': '#657b83',
            'head2-bg': '#586e75',
            'head3': '#fdf6e3',
            'head3-bg': '#eee8d5',
            'head4': '#93a1a1',
            'head4-bg': '#839496',
            'highlight': '#586e75',
            'highlight-dim': '#657b83',
            'keyword': '#eee8d5',
            'lnum': '#93a1a1',
            'mat': '#657b83',
            'meta': '#586e75',
            'str': '#2aa198',
            'suc': '#859900',
            'ttip': '#93a1a1',
            'ttip-sl': '#657b83',
            'ttip-bg': '#586e75',
            'type': '#dc322f',
            'var': '#657b83',
            'war': '#cb4b16',
            'aqua': '#2aa198',
            'aqua-bg': '#fdf6e3',
            'green': '#859900',
            'green-bg': '#fdf6e3',
            'green-bg-s': '#fdf6e3',
            'cyan': '#2aa198',
            'red': '#dc322f',
            'red-bg': '#fdf6e3',
            'red-bg-s': '#fdf6e3',
            'blue': '#268bd2',
            'blue-bg': '#fdf6e3',
            'blue-bg-s': '#fdf6e3',
            'magenta': '#d33682',
            'yellow': '#b58900',
            'yellow-bg': '#fdf6e3'
        }
    };

    static get observedAttributes() {
        return ['theme'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'theme') {
            this.applyTheme(newValue);
        }
    }
    connectedCallback() {
        const theme = this.getAttribute('theme') || 'dark';
        this.applyTheme(theme);


    }
    applyTheme(themeName) {
        const themeColors = this.colors[themeName];
        if (!themeColors) {
            console.error(`Theme "${themeName}" does not exist.`);
            return;
        }

        for (let colorName in themeColors) {
            document.documentElement.style.setProperty(`--${colorName}`, themeColors[colorName]);
        }
    }
}
customElements.define('theme-switcher', ThemeSwitcher);
export default ThemeSwitcher;