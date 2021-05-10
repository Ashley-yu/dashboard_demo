主要用於 Sidebar 上的選單連結，自訂要顯示的文字、圖示、樣式...等

### Examples

含有 icon 圖示的 NavLink:

```vue
<ul class="nav">
    <NavLink
        header="Dashboard"
        link="/app/dashboard"
        iconName="flaticon-home"
        index="dashboard"
        isHeader
    />
</ul>
```

含有多個子選單的 NavLink：

```vue
<ul class="nav">
    <NavLink
        activeItem="/app/components"
        header="Components"
        link="/app/components"
        iconName="flaticon-network"
        index="components"
        :childrenLinks="[
          { header: 'Charts', link: '/app/components/charts' },
          { header: 'Icons', link: '/app/components/icons' },
          { header: 'Maps', link: '/app/components/maps' },
        ]"
    />
</ul>
```

含有標示的 NavLink, 並將標示設置為橘色：

```vue
<ul class="nav">
    <NavLink
        header="Dashboard"
        link="/app/dashboard"
        iconName="flaticon-home"
        index="dashboard"
        label="HOT"
        label-color="danger"
        isHeader
    />
</ul>
```


