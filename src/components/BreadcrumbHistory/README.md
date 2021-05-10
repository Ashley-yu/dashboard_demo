於頁面上顯示的麵包屑導航

### Examples

麵包屑導航的路徑來自於 router/index.js 中的 meta.breadcrumb，
格式如下：
```javascript
{
    path: '/dashboard',
    name: 'Layout',
    children: [
        {
            path: 'analytics',
            name: 'AnalyticsPage',
            meta: {
                breadcrumb: [
                    {
                        text: 'dashboard',
                        to: { name: 'Layout' }
                    },
                    {
                        text: 'analytics',
                        to: { name: 'AnalyticsPage' }
                    }
                ]
            },
        },
    ]
}
```

顯示麵包屑導航：

```vue
<breadcrumb-history></breadcrumb-history>
```

新增要排除顯示麵包屑導航的頁面，exclude 帶入 router 中設定的 name：

```vue
<breadcrumb-history :exclude="['AnalyticsPage']"></breadcrumb-history>
```


