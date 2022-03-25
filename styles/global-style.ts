import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    /* 텍스트 마우스 드래그시 색상 변경방법 */
    ::selection,
    ::-moz-selection {
    background : #39f;
    color      : #fff;
    text-shadow: none;
    }
    
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html{
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
          /* font 속성 리셋 */
        font-size                  : 16px;
        /* 기본 글골 사이즈 정의            : 16x => 1rem */
        font-weight                : normal;
        line-height                : 1.5;
        /* 단위 쓰지 말것 */
        background-color           : #fff;
        color                      : #4d5058;
        /* 글꼴 크기 조정을 방지 */
        -webkit-text-size-adjust   : 100%;
        /* 폰트를 부드럽게 */
        -webkit-font-smoothing     : antialiased;
        -moz-osx-font-smoothing    : grayscale;
        /* 웹킷 마음대로 눌림 하이라이트 막음 */
        -webkit-tap-highlight-color: transparent;
    }

    /* 기본 셋업 */
    header,section,article,aside,footer,main,a,button,input,textarea,img,nav,ul,ol,li,p,h1,h2,h3,h4,h5,h6,div,span{
    margin   : 0;
    padding  : 0;
    /* 폰트 설정 상속 */
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    }

    a:active,
a:hover {
  outline: none;
}
 
a {
  color          : #1e87f0;
  text-decoration: none;
  cursor         : pointer;
}
 
a:hover {
  color          : #0f6ecd;
  text-decoration: none;
}
 
abbr[title] {
  text-decoration              : underline dotted;
  /* Safari에서는 '밑줄 점선'이 지원되지 않음. */
  -webkit-text-decoration-style: dotted;
}
 
b,
strong {
  font-weight: bolder;
}
 
:not(pre)>code,
:not(pre)>kbd,
:not(pre)>samp {
  font-family: Consolas, monaco, monospace;
  font-size  : 0.875rem;
  color      : #f0506e;
  white-space: nowrap;
  padding    : 2px 6px;
  background : #f8f8f8;
}
 
em {
  color: #f0506e;
}
 
ins {
  background     : #ffd;
  color          : #666;
  text-decoration: none;
}
 
mark,
.mark {
  background: #ffd;
  color     : #666;
}
 
q {
  font-style: italic;
}
 
small,
.small {
  font-size: 80%;
}
 
sub,
sup {
  font-size     : 75%;
  line-height   : 0;
  position      : relative;
  vertical-align: baseline;
}
 
sup {
  top: -0.5em;
}
 
sub {
  bottom: -0.25em;
}
 
audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}
 
canvas,
img,
video {
  max-width : 100%;
  height    : auto;
  box-sizing: border-box;
}
 
@supports (display:block) {
  svg {
    max-width : 100%;
    height    : auto;
    box-sizing: border-box;
  }
}
 
svg:not(:root) {
  overflow: hidden;
}
 
img:not([src]) {
  min-width : 1px;
  visibility: hidden;
}
 
iframe {
  border: 0;
}
 
p {
  margin-top   : 0;
  margin-bottom: 1rem;
}
 
/* 인접한 요소 인 경우 여백 추가 */
*+p {
  margin-top: 1rem;
}
 
ul,
ol,
dl,
pre,
address,
fieldset,
figure {
  margin: 0 0 20px 0;
}
 
/* 인접한 요소 인 경우 여백 추가 */
*+ul,
*+ol,
*+dl,
*+pre,
*+address,
*+fieldset,
*+figure {
  margin-top: 20px;
}
 
h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{
  margin        : 0 0 20px 0;
  font-weight   : normal;
  color         : #333;
  text-transform: none;
}
 
/* 인접한 요소 인 경우 여백 추가 */
*+h1,*+h2,*+h3,*+h4,*+h5,*+h6,*+.h1,*+.h2,*+.h3,*+.h4,*+.h5,*+.h6{margin-top:40px;}
 
h1,
.h1 {
  font-size  : 2.23125rem;
  line-height: 1.2;
}
 
h2,
.h2 {
  font-size  : 1.7rem;
  line-height: 1.3;
}
 
h3,
.h3 {
  font-size  : 1.5rem;
  line-height: 1.4;
}
 
h4,
.h4 {
  font-size  : 1.25rem;
  line-height: 1.4;
}
 
h5,
.h5 {
  font-size  : 16px;
  line-height: 1.4;
}
 
h6,
.h6 {
  font-size  : 0.875rem;
  line-height: 1.4;
}
 
@media (min-width:960px) {
 
  h1,
  .h1 {
    font-size: 2.625rem;
  }
 
  h2,
  .h2 {
    font-size: 2rem;
  }
}
 
ul,
ol {
  padding-right: 0px;
}
 
ul>li>ul,
ul>li>ol,
ol>li>ol,
ol>li>ul {
  margin: 0 0 0 15px
}
 
dt {
  font-weight: bold;
}
 
dd {
  margin-right: 0;
}
 
hr {
  overflow  : visible;
  text-align: inherit;
  margin    : 0 0 20px 0;
  border    : 0;
  border-top: 1px solid #e5e5e5;
}
 
/* 인접한 요소 인 경우 여백 추가 */
*+hr {
  margin-top: 20px;
}
 
address {
  font-style: normal;
}
 
blockquote {
  margin     : 0 0 20px 0;
  font-size  : 1.25rem;
  line-height: 1.5;
  font-style : italic;
  color      : #333;
}
 
/* 인접한 요소 인 경우 여백 추가 */
*+blockquote {
  margin-top: 20px;
}
 
blockquote p:last-of-type {
  margin-bottom: 0;
}
 
blockquote footer {
  margin-top : 10px;
  font-size  : 0.875rem;
  line-height: 1.5;
  color      : #666;
}
 
blockquote footer::before {
  content: "— ";
}
 
pre {
  font         : 0.875rem / 1.5 Consolas, monaco, monospace;
  color        : #666;
  -moz-tab-size: 4;
  tab-size     : 4;
  /* 1 */
  overflow     : auto;
  padding      : 10px;
  border       : 1px solid #e5e5e5;
  border-radius: 3px;
  background   : #fff;
}
 
pre code {
  font-family: Consolas, monaco, monospace;
}
 
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
 
button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer;
}
 
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding     : 0;
  border-style: none;
}
 
input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding   : 0;
}
 
input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
    -webkit-appearance: listbox;
}
 
textarea {
    overflow: auto;
    resize: vertical;
}
 
fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
}
 
legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
}
 
progress {
    vertical-align: baseline;
}
 
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}
 
[type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
}
 
[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}
 
::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
}
 
[hidden] {
    display: none !important;
}
 
/* HTML5 elements  ========================================================================== */
details,
main {
    display: block;
}
 
summary {
    display: list-item;
}
 
template {
    display: none;
}
`;