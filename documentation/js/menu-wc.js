'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">yuntu-editor documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="请输入查询关键字"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>入门指南</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>概述
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>手册
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>依赖项
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>属性列表
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">模块列表</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0cd5f4eb57f1ee4612d2ee83d3996275b9bbd7153dc1980e4d9376e50c81bffa54f26b04cf490fceb1497a638b9e70fd3b01a0c898b8a7b1554f29211845f53e"' : 'data-target="#xs-components-links-module-AppModule-0cd5f4eb57f1ee4612d2ee83d3996275b9bbd7153dc1980e4d9376e50c81bffa54f26b04cf490fceb1497a638b9e70fd3b01a0c898b8a7b1554f29211845f53e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>组件列表</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0cd5f4eb57f1ee4612d2ee83d3996275b9bbd7153dc1980e4d9376e50c81bffa54f26b04cf490fceb1497a638b9e70fd3b01a0c898b8a7b1554f29211845f53e"' :
                                            'id="xs-components-links-module-AppModule-0cd5f4eb57f1ee4612d2ee83d3996275b9bbd7153dc1980e4d9376e50c81bffa54f26b04cf490fceb1497a638b9e70fd3b01a0c898b8a7b1554f29211845f53e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonSettingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataDemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataDemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DemoAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DemoBlockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DemoDataViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoDataViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DemoLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FrameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableSettingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YunAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YunAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YunBlockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YunBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YunBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YunBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YunRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YunRowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-0cd5f4eb57f1ee4612d2ee83d3996275b9bbd7153dc1980e4d9376e50c81bffa54f26b04cf490fceb1497a638b9e70fd3b01a0c898b8a7b1554f29211845f53e"' : 'data-target="#xs-directives-links-module-AppModule-0cd5f4eb57f1ee4612d2ee83d3996275b9bbd7153dc1980e4d9376e50c81bffa54f26b04cf490fceb1497a638b9e70fd3b01a0c898b8a7b1554f29211845f53e"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>指令列表</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-0cd5f4eb57f1ee4612d2ee83d3996275b9bbd7153dc1980e4d9376e50c81bffa54f26b04cf490fceb1497a638b9e70fd3b01a0c898b8a7b1554f29211845f53e"' :
                                        'id="xs-directives-links-module-AppModule-0cd5f4eb57f1ee4612d2ee83d3996275b9bbd7153dc1980e4d9376e50c81bffa54f26b04cf490fceb1497a638b9e70fd3b01a0c898b8a7b1554f29211845f53e"' }>
                                        <li class="link">
                                            <a href="directives/FrameDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrameDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>组件列表</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/SettingAbstract.html" data-type="entity-link" >SettingAbstract</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>类列表</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Area.html" data-type="entity-link" >Area</a>
                            </li>
                            <li class="link">
                                <a href="classes/Block.html" data-type="entity-link" >Block</a>
                            </li>
                            <li class="link">
                                <a href="classes/Box.html" data-type="entity-link" >Box</a>
                            </li>
                            <li class="link">
                                <a href="classes/Page.html" data-type="entity-link" >Page</a>
                            </li>
                            <li class="link">
                                <a href="classes/Row.html" data-type="entity-link" >Row</a>
                            </li>
                            <li class="link">
                                <a href="classes/Widget.html" data-type="entity-link" >Widget</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>可注入的</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DataSourceService.html" data-type="entity-link" >DataSourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FrameService.html" data-type="entity-link" >FrameService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>接口</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PeriodicElement.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Setting.html" data-type="entity-link" >Setting</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>其他</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">类型别名</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">变量</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>路由列表</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>文档概览</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        文档生成使用 <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});