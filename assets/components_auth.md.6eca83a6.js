import{o as a,c as n,a as s}from"./app.97467d25.js";const t='{"title":"Authority","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"components/auth.md","lastUpdated":1637216213759}',p={},o=s('<h1 id="authority"><a class="header-anchor" href="#authority" aria-hidden="true">#</a> Authority</h1><p>用于项目权限的组件，一般用于按钮级等细粒度权限管理</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Authority</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RoleEnum.ADMIN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">block</span><span class="token punctuation">&gt;</span></span> 只有admin角色可见 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Authority</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Authority <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Authority&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> Authority <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td><code>RoleEnum,RoleEnum[],string,string[]</code></td><td>-</td><td>角色信息或者权限编码。会自动区分权限模式</td></tr></tbody></table>',6);p.render=function(s,t,p,e,c,l){return a(),n("div",null,[o])};export default p;export{t as __pageData};
