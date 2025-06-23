<template>
  <div class="has-logo">
    <p @click="goHome" class="system-title">
      <img src="../../assets/logo.png" alt="">
    </p>
    <el-menu
			:default-active="activeMenu"
			:collapse="true" 
			background-color="#304156"
			text-color="#bfcbd9"
			active-text-color="#409eff"
			mode="vertical"
		>

    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  data() {
    return {
      premission_routes: [{
      	"path": "/",
      	"component": {
      		"name": "Vuex",
      		"components": {
      			"AppMain": {
      				"name": "AppMain",
      				"computed": {},
      				"staticRenderFns": [],
      				"_compiled": true,
      				"_scopeId": "data-v-4b4da37d",
      				"beforeCreate": [null],
      				"beforeDestroy": [null],
      				"__file": "src/components/AppMain/index.vue",
      				"_Ctor": {}
      			},
      			"Navbar": {
      				"components": {
      					"Breadcrumb": {
      						"components": {},
      						"watch": {},
      						"methods": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"_scopeId": "data-v-b50ef614",
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Breadcrumb/index.vue",
      						"_Ctor": {}
      					},
      					"Hamburger": {
      						"name": "Hamburger",
      						"props": {
      							"isActive": {
      								"default": false
      							}
      						},
      						"methods": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"_scopeId": "data-v-4e6f274c",
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Hamburger/index.vue",
      						"_Ctor": {}
      					}
      				},
      				"props": {
      					"systemName": {
      						"default": ""
      					},
      					"isLoginModule": {
      						"default": false
      					},
      					"loginPath": {
      						"default": "/jv-login"
      					},
      					"pREFIX": {
      						"default": "SAAS_"
      					}
      				},
      				"computed": {},
      				"methods": {},
      				"staticRenderFns": [],
      				"_compiled": true,
      				"_scopeId": "data-v-c735de7a",
      				"beforeCreate": [null],
      				"beforeDestroy": [null],
      				"__file": "src/components/Navbar/index.vue",
      				"_Ctor": {}
      			},
      			"Sidebar": {
      				"components": {
      					"SidebarItem": {
      						"name": "SidebarItem",
      						"components": {
      							"Item": {
      								"name": "MenuItem",
      								"functional": true,
      								"props": {
      									"icon": {
      										"default": ""
      									},
      									"title": {
      										"default": ""
      									}
      								},
      								"_scopeId": "data-v-f8fde194",
      								"__file": "src/components/Sidebar/Item.vue",
      								"_Ctor": {}
      							},
      							"AppLink": {
      								"props": {
      									"to": {
      										"required": true
      									}
      								},
      								"methods": {},
      								"staticRenderFns": [],
      								"_compiled": true,
      								"beforeCreate": [null],
      								"beforeDestroy": [null],
      								"__file": "src/components/Sidebar/Link.vue",
      								"_Ctor": {}
      							}
      						},
      						"mixins": [{
      							"computed": {},
      							"methods": {}
      						}],
      						"props": {
      							"item": {
      								"required": true
      							},
      							"isNest": {
      								"default": false
      							},
      							"basePath": {
      								"default": ""
      							}
      						},
      						"methods": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Sidebar/SidebarItem.vue",
      						"_Ctor": {}
      					},
      					"Logo": {
      						"name": "SidebarLogo",
      						"props": {
      							"collapse": {
      								"required": true
      							}
      						},
      						"computed": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"_scopeId": "data-v-93a96464",
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Sidebar/Logo.vue",
      						"_Ctor": {}
      					}
      				},
      				"computed": {},
      				"staticRenderFns": [],
      				"_compiled": true,
      				"_scopeId": "data-v-71667e42",
      				"beforeCreate": [null],
      				"beforeDestroy": [null],
      				"__file": "src/components/Sidebar/index.vue",
      				"_Ctor": {}
      			}
      		},
      		"mixins": [{
      			"watch": {},
      			"methods": {}
      		}],
      		"props": {
      			"showMain": {
      				"default": true
      			},
      			"systemName": {
      				"default": ""
      			},
      			"isLoginModule": {
      				"default": false
      			}
      		},
      		"computed": {},
      		"methods": {},
      		"staticRenderFns": [],
      		"_compiled": true,
      		"_scopeId": "data-v-13877386",
      		"beforeCreate": [null],
      		"beforeDestroy": [null],
      		"__file": "src/layout/index.vue",
      		"_Ctor": {}
      	},
      	"redirect": "/home",
      	"children": [{
      		"path": "/home",
      		"name": "首页",
      		"hidden": true,
      		"meta": {
      			"title": "首页"
      		}
      	}, {
      		"path": "/editPassword",
      		"name": "editPassword",
      		"hidden": true,
      		"meta": {
      			"title": "修改密码"
      		}
      	}]
      }, {
      	"path": "/login",
      	"name": "login",
      	"hidden": true,
      	"meta": {
      		"title": "登录"
      	}
      }, {
      	"path": "/404",
      	"name": "404",
      	"hidden": true,
      	"meta": {
      		"title": "404"
      	}
      }, {
      	"path": "/401",
      	"name": "401",
      	"hidden": true,
      	"meta": {
      		"title": "401"
      	}
      }, {
      	"path": "/decorate",
      	"name": "decorate"
      }, {
      	"path": "/preview",
      	"name": "preview"
      }, {
      	"path": "/activity",
      	"name": "activity",
      	"component": {
      		"name": "Vuex",
      		"components": {
      			"AppMain": {
      				"name": "AppMain",
      				"computed": {},
      				"staticRenderFns": [],
      				"_compiled": true,
      				"_scopeId": "data-v-4b4da37d",
      				"beforeCreate": [null],
      				"beforeDestroy": [null],
      				"__file": "src/components/AppMain/index.vue",
      				"_Ctor": {}
      			},
      			"Navbar": {
      				"components": {
      					"Breadcrumb": {
      						"components": {},
      						"watch": {},
      						"methods": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"_scopeId": "data-v-b50ef614",
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Breadcrumb/index.vue",
      						"_Ctor": {}
      					},
      					"Hamburger": {
      						"name": "Hamburger",
      						"props": {
      							"isActive": {
      								"default": false
      							}
      						},
      						"methods": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"_scopeId": "data-v-4e6f274c",
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Hamburger/index.vue",
      						"_Ctor": {}
      					}
      				},
      				"props": {
      					"systemName": {
      						"default": ""
      					},
      					"isLoginModule": {
      						"default": false
      					},
      					"loginPath": {
      						"default": "/jv-login"
      					},
      					"pREFIX": {
      						"default": "SAAS_"
      					}
      				},
      				"computed": {},
      				"methods": {},
      				"staticRenderFns": [],
      				"_compiled": true,
      				"_scopeId": "data-v-c735de7a",
      				"beforeCreate": [null],
      				"beforeDestroy": [null],
      				"__file": "src/components/Navbar/index.vue",
      				"_Ctor": {}
      			},
      			"Sidebar": {
      				"components": {
      					"SidebarItem": {
      						"name": "SidebarItem",
      						"components": {
      							"Item": {
      								"name": "MenuItem",
      								"functional": true,
      								"props": {
      									"icon": {
      										"default": ""
      									},
      									"title": {
      										"default": ""
      									}
      								},
      								"_scopeId": "data-v-f8fde194",
      								"__file": "src/components/Sidebar/Item.vue",
      								"_Ctor": {}
      							},
      							"AppLink": {
      								"props": {
      									"to": {
      										"required": true
      									}
      								},
      								"methods": {},
      								"staticRenderFns": [],
      								"_compiled": true,
      								"beforeCreate": [null],
      								"beforeDestroy": [null],
      								"__file": "src/components/Sidebar/Link.vue",
      								"_Ctor": {}
      							}
      						},
      						"mixins": [{
      							"computed": {},
      							"methods": {}
      						}],
      						"props": {
      							"item": {
      								"required": true
      							},
      							"isNest": {
      								"default": false
      							},
      							"basePath": {
      								"default": ""
      							}
      						},
      						"methods": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Sidebar/SidebarItem.vue",
      						"_Ctor": {}
      					},
      					"Logo": {
      						"name": "SidebarLogo",
      						"props": {
      							"collapse": {
      								"required": true
      							}
      						},
      						"computed": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"_scopeId": "data-v-93a96464",
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Sidebar/Logo.vue",
      						"_Ctor": {}
      					}
      				},
      				"computed": {},
      				"staticRenderFns": [],
      				"_compiled": true,
      				"_scopeId": "data-v-71667e42",
      				"beforeCreate": [null],
      				"beforeDestroy": [null],
      				"__file": "src/components/Sidebar/index.vue",
      				"_Ctor": {}
      			}
      		},
      		"mixins": [{
      			"watch": {},
      			"methods": {}
      		}],
      		"props": {
      			"showMain": {
      				"default": true
      			},
      			"systemName": {
      				"default": ""
      			},
      			"isLoginModule": {
      				"default": false
      			}
      		},
      		"computed": {},
      		"methods": {},
      		"staticRenderFns": [],
      		"_compiled": true,
      		"_scopeId": "data-v-13877386",
      		"beforeCreate": [null],
      		"beforeDestroy": [null],
      		"__file": "src/layout/index.vue",
      		"_Ctor": {}
      	},
      	"meta": {
      		"title": "活动管理"
      	},
      	"children": [{
      		"path": "/",
      		"hidden": true
      	}]
      }, {
      	"path": "/noRedirect0",
      	"component": {
      		"name": "Vuex",
      		"components": {
      			"AppMain": {
      				"name": "AppMain",
      				"computed": {},
      				"staticRenderFns": [],
      				"_compiled": true,
      				"_scopeId": "data-v-4b4da37d",
      				"beforeCreate": [null],
      				"beforeDestroy": [null],
      				"__file": "src/components/AppMain/index.vue",
      				"_Ctor": {}
      			},
      			"Navbar": {
      				"components": {
      					"Breadcrumb": {
      						"components": {},
      						"watch": {},
      						"methods": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"_scopeId": "data-v-b50ef614",
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Breadcrumb/index.vue",
      						"_Ctor": {}
      					},
      					"Hamburger": {
      						"name": "Hamburger",
      						"props": {
      							"isActive": {
      								"default": false
      							}
      						},
      						"methods": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"_scopeId": "data-v-4e6f274c",
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Hamburger/index.vue",
      						"_Ctor": {}
      					}
      				},
      				"props": {
      					"systemName": {
      						"default": ""
      					},
      					"isLoginModule": {
      						"default": false
      					},
      					"loginPath": {
      						"default": "/jv-login"
      					},
      					"pREFIX": {
      						"default": "SAAS_"
      					}
      				},
      				"computed": {},
      				"methods": {},
      				"staticRenderFns": [],
      				"_compiled": true,
      				"_scopeId": "data-v-c735de7a",
      				"beforeCreate": [null],
      				"beforeDestroy": [null],
      				"__file": "src/components/Navbar/index.vue",
      				"_Ctor": {}
      			},
      			"Sidebar": {
      				"components": {
      					"SidebarItem": {
      						"name": "SidebarItem",
      						"components": {
      							"Item": {
      								"name": "MenuItem",
      								"functional": true,
      								"props": {
      									"icon": {
      										"default": ""
      									},
      									"title": {
      										"default": ""
      									}
      								},
      								"_scopeId": "data-v-f8fde194",
      								"__file": "src/components/Sidebar/Item.vue",
      								"_Ctor": {}
      							},
      							"AppLink": {
      								"props": {
      									"to": {
      										"required": true
      									}
      								},
      								"methods": {},
      								"staticRenderFns": [],
      								"_compiled": true,
      								"beforeCreate": [null],
      								"beforeDestroy": [null],
      								"__file": "src/components/Sidebar/Link.vue",
      								"_Ctor": {}
      							}
      						},
      						"mixins": [{
      							"computed": {},
      							"methods": {}
      						}],
      						"props": {
      							"item": {
      								"required": true
      							},
      							"isNest": {
      								"default": false
      							},
      							"basePath": {
      								"default": ""
      							}
      						},
      						"methods": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Sidebar/SidebarItem.vue",
      						"_Ctor": {}
      					},
      					"Logo": {
      						"name": "SidebarLogo",
      						"props": {
      							"collapse": {
      								"required": true
      							}
      						},
      						"computed": {},
      						"staticRenderFns": [],
      						"_compiled": true,
      						"_scopeId": "data-v-93a96464",
      						"beforeCreate": [null],
      						"beforeDestroy": [null],
      						"__file": "src/components/Sidebar/Logo.vue",
      						"_Ctor": {}
      					}
      				},
      				"computed": {},
      				"staticRenderFns": [],
      				"_compiled": true,
      				"_scopeId": "data-v-71667e42",
      				"beforeCreate": [null],
      				"beforeDestroy": [null],
      				"__file": "src/components/Sidebar/index.vue",
      				"_Ctor": {}
      			}
      		},
      		"mixins": [{
      			"watch": {},
      			"methods": {}
      		}],
      		"props": {
      			"showMain": {
      				"default": true
      			},
      			"systemName": {
      				"default": ""
      			},
      			"isLoginModule": {
      				"default": false
      			}
      		},
      		"computed": {},
      		"methods": {},
      		"staticRenderFns": [],
      		"_compiled": true,
      		"_scopeId": "data-v-13877386",
      		"beforeCreate": [null],
      		"beforeDestroy": [null],
      		"__file": "src/layout/index.vue",
      		"_Ctor": {}
      	},
      	"name": "活动管理",
      	"redirect": "noRedirect",
      	"meta": {
      		"title": "活动管理",
      		"icon": ""
      	},
      	"children": []
      }, {
      	"path": "*",
      	"redirect": "/401",
      	"hidden": true
      }]
    }
  },
  methods: {
    goHome() {

    }
  },
	computed: {
		activeMenu() {
			const { path, meta } = this.$route
			// 判断当前是否定义了默认展开的菜单
			if(meta.activeMenu) {
				return meta.activeMenu
			}
			return path
		}
	}
}
</script>