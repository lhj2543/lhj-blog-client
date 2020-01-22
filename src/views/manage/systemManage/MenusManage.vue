<template>
    <div id="menusManage" class="menusManage">

        <Split v-model="split1" min="200px" max="900px" >
            <div slot="left" class="menus-split-pane" >
                
                <Tree :data="menus" :render="renderContent" class="menus-tree"></Tree>

            </div>
            <div slot="right"   class="menus-split-pane">
                Right Pane
            </div>
        </Split>

    </div>
</template>

<script>
export default {
    name:'MenusManage',
    data(){
        return{
            split1:0.2,
            menus: [
                    {
                    title: '后台管理',
                    expand: true,
                    render: (h, { root, node, data }) => {
                        return h('span', 
                            {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, 
                            [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ]),
                                h('span', 
                                    {
                                        style: {
                                            display: 'inline-block',
                                            float: 'right',
                                            marginRight: '32px'
                                        }
                                    }, 
                                    [
                                        h('Button', {
                                            props: Object.assign({}, this.buttonProps, {
                                                icon: 'ios-add',
                                                type: 'primary'
                                            }),
                                            style: {
                                                width: '64px'
                                            },
                                            on: {
                                                click: () => { this.append(data) }
                                            }
                                        })
                                    ]
                                )
                            ]
                        );
                    },
                    children: [
                        {
                            title: '首页',
                            expand: false,
                        },
                        {
                            title: '系统管理',
                            expand: true,
                            children: [
                                {
                                    title: '菜单管理',
                                    expand: true,
                                    children:[
                                        {
                                            title: '菜单管理',
                                            expand: true,
                                            children:[]
                                        },
                                        {
                                            title: '菜单授权',
                                            expand: true,
                                            children:[]
                                        }
                                    ]
                                },
                                {
                                    title: '用户管理',
                                    expand: true,
                                    children:[
                                        {
                                            title: '用户管理',
                                            expand: true,
                                            children:[]
                                        },
                                        {
                                            title: '用户授权',
                                            expand: true,
                                            children:[]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            buttonProps: {
                type: ' ',
                size: 'small',
            }
        }
    },
    methods: {
        renderContent (h, { root, node, data }) {
            debugger
            return h('span', 
                {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, 
                [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, 
                    [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-add'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(data) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-remove'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]
            );
        },
        append (data) {
            const children = data.children || [];
            children.push({
                title: 'appended node',
                expand: true
            });
            this.$set(data, 'children', children);
        },
        remove (root, node, data) {
            const parentKey = root.find(el => el === node).parent;
            const parent = root.find(el => el.nodeKey === parentKey).node;
            const index = parent.children.indexOf(data);
            parent.children.splice(index, 1);
        }
    }
}
</script>

<style scoped>
    #menusManage{
        height: 100%;
        /* border: 1px solid #dcdee2; */
    }

    .menus-split-pane{
        padding: 10px;
    }

</style>