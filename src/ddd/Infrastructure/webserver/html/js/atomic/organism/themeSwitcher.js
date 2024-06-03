/**
 Extracted from https://github.com/nashamri/spacemacs-theme/blob/master/spacemacs-theme.el with AI assistant check        the repo and give your start if you copy a line from here
 https://github.com/nashamri/spacemacs-theme/tree/master?tab=readme-ov-file#override-themes-colors

 */
class ThemeSwitcher extends HTMLElement {

    colors = {
        'spacemacs-dark': {
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
            'head1': '#4f97d7',
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
            'yellow-bg': '#32322c',
        },
        'spacemacs-light': {
            'act1': '#e7e5eb',
            'act2': '#d3d3e7',
            'base': '#655370',
            'base-dim': '#a094a2',
            'bg1': '#fbf8ef',
            'bg2': '#efeae9',
            'bg3': '#e3dedd',
            'bg4': '#d2ceda',
            'bg-alt': '#efeae9',
            'border': '#b3b9be',
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
            'aqua': '#2d9574',
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
        'github-light': {
            'act1': '#f6f8fa',
            'act2': '#e1e4e8',
            'base': '#24292e',
            'base-dim': '#586069',
            'bg1': '#ffffff',
            'bg2': '#fafbfc',
            'bg3': '#f6f8fa',
            'bg4': '#e1e4e8',
            'bg-alt': '#f6f8fa',
            'border': '#e1e4e8',
            'cblk': '#24292e',
            'cblk-bg': '#ffffff',
            'cblk-ln': '#24292e',
            'cblk-ln-bg': '#ffffff',
            'cursor': '#24292e',
            'const': '#6f42c1',
            'comment': '#6a737d',
            'comment-light': '#959da5',
            'comment-bg': '#f6f8fa',
            'comp': '#005cc5',
            'err': '#cb2431',
            'func': '#6f42c1',
            'head1': '#005cc5',
            'head1-bg': '#f6f8fa',
            'head2': '#d73a49',
            'head2-bg': '#f6f8fa',
            'head3': '#6f42c1',
            'head3-bg': '#f6f8fa',
            'head4': '#005cc5',
            'head4-bg': '#f6f8fa',
            'highlight': '#fffbdd',
            'highlight-dim': '#fafbfc',
            'keyword': '#d73a49',
            'lnum': '#959da5',
            'mat': '#6f42c1',
            'meta': '#6a737d',
            'str': '#032f62',
            'suc': '#28a745',
            'ttip': '#24292e',
            'ttip-sl': '#24292e',
            'ttip-bg': '#ffffff',
            'type': '#6f42c1',
            'var': '#d73a49',
            'war': '#b7791f',
            'aqua': '#2f363d',
            'aqua-bg': '#f6f8fa',
            'green': '#22863a',
            'green-bg': '#f6f8fa',
            'green-bg-s': '#f6f8fa',
            'cyan': '#2f363d',
            'red': '#cb2431',
            'red-bg': '#f6f8fa',
            'red-bg-s': '#f6f8fa',
            'blue': '#005cc5',
            'blue-bg': '#f6f8fa',
            'blue-bg-s': '#f6f8fa',
            'magenta': '#6f42c1',
            'yellow': '#b7791f',
            'yellow-bg': '#f6f8fa'
        },
        'light': {
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
        },
        'nord': {
            'act1': '#2e3440',
            'act2': '#3b4252',
            'base': '#d8dee9',
            'base-dim': '#e5e9f0',
            'bg1': '#2e3440',
            'bg2': '#3b4252',
            'bg3': '#434c5e',
            'bg4': '#4c566a',
            'bg-alt': '#3b4252',
            'border': '#4c566a',
            'cblk': '#4c566a',
            'cblk-bg': '#3b4252',
            'cblk-ln': '#4c566a',
            'cblk-ln-bg': '#3b4252',
            'cursor': '#2e3440',
            'const': '#81a1c1',
            'comment': '#4c566a',
            'comment-light': '#d8dee9',
            'comment-bg': '#3b4252',
            'comp': '#88c0d0',
            'err': '#bf616a',
            'func': '#88c0d0',
            'head1': '#8fbcbb',
            'head1-bg': '#3b4252',
            'head2': '#88c0d0',
            'head2-bg': '#3b4252',
            'head3': '#81a1c1',
            'head3-bg': '#3b4252',
            'head4': '#5e81ac',
            'head4-bg': '#3b4252',
            'highlight': '#434c5e',
            'highlight-dim': '#4c566a',
            'keyword': '#81a1c1',
            'lnum': '#4c566a',
            'mat': '#b48ead',
            'meta': '#d8dee9',
            'str': '#a3be8c',
            'suc': '#a3be8c',
            'ttip': '#4c566a',
            'ttip-sl': '#3b4252',
            'ttip-bg': '#3b4252',
            'type': '#8fbcbb',
            'var': '#d08770',
            'war': '#ebcb8b',
            'aqua': '#8fbcbb',
            'aqua-bg': '#3b4252',
            'green': '#a3be8c',
            'green-bg': '#3b4252',
            'green-bg-s': '#3b4252',
            'cyan': '#88c0d0',
            'red': '#bf616a',
            'red-bg': '#3b4252',
            'red-bg-s': '#3b4252',
            'blue': '#81a1c1',
            'blue-bg': '#3b4252',
            'blue-bg-s': '#3b4252',
            'magenta': '#b48ead',
            'yellow': '#ebcb8b',
            'yellow-bg': '#3b4252'
        },
        'linkedIn': {
            'act1': '#313335',
            'act2': '#0077B5',
            'base': '#000000',
            //light almost white base
            'base-dim': '#b9b3b3',
            'bg1': '#FFFFFF',
            'bg2': '#313335',
            'bg3': '#86888A',
            'bg4': '#000000',
            'bg-alt': '#313335',
            'border': '#0077B5',
            'cblk': '#000000',
            'cblk-bg': '#313335',
            'cblk-ln': '#0077B5',
            'cblk-ln-bg': '#86888A',
            'cursor': '#000000',
            'const': '#0077B5',
            'comment': '#86888A',
            'comment-light': '#86888A',
            'comment-bg': '#313335',
            'comp': '#0077B5',
            'err': '#000000',
            'func': '#0077B5',
            'head1': '#0077B5',
            'head1-bg': '#313335',
            'head2': '#0077B5',
            'head2-bg': '#313335',
            'head3': '#0077B5',
            'head3-bg': '#313335',
            'head4': '#0077B5',
            'head4-bg': '#313335',
            'highlight': '#0077B5',
            'highlight-dim': '#86888A',
            'keyword': '#0077B5',
            'lnum': '#86888A',
            'mat': '#0077B5',
            'meta': '#86888A',
            'str': '#0077B5',
            'suc': '#0077B5',
            'ttip': '#86888A',
            'ttip-sl': '#0077B5',
            'ttip-bg': '#313335',
            'type': '#0077B5',
            'var': '#0077B5',
            'war': '#000000',
            'aqua': '#0077B5',
            'aqua-bg': '#313335',
            'green': '#0077B5',
            'green-bg': '#313335',
            'green-bg-s': '#313335',
            'cyan': '#0077B5',
            'red': '#000000',
            'red-bg': '#313335',
            'red-bg-s': '#313335',
            'blue': '#0077B5',
            'blue-bg': '#313335',
            'blue-bg-s': '#313335',
            'magenta': '#0077B5',
            'yellow': '#0077B5',
            'yellow-bg': '#313335',
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
        const theme = this.getAttribute('theme') || 'light';
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
        //controlamos desde aquí el bg del html
        document.documentElement.style.backgroundColor = themeColors['bg1']
    }

    get themeNames() {
        return Object.keys(this.colors);
    }
}

customElements.define('theme-switcher', ThemeSwitcher);
export default ThemeSwitcher;