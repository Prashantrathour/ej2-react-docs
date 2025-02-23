---
layout: post
title: 100% Stacked Area Chart in React Chart component | Syncfusion
description: Learn here all about 100% Stacked Area Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: 100% Stacked Area Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# 100% Stacked Area in React Chart component

## 100% Stacked Area

To render a 100% stacked area series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StackingArea100` and inject `StackingAreaSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs16" %}

## Series customization

The following properties can be used to customize the `100% stacked area` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill) – Specifies the color of the area series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/100-stackedarea-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/100-stackedarea-cs/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/100-stackedarea-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
