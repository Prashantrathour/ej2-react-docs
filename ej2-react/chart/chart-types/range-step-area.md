---
layout: post
title: Range Step Area Chart in React Chart component | Syncfusion
description: Learn here all about Range Step Area Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Range Step Area Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Range Step Area Chart in React Chart component

## Range Step Area

To render the range step area series, use the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#type) as a `RangeStepArea` and inject the `RangeStepAreaSeries` module using the `Chart.Inject(RangeStepAreaSeries)` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs36/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs36/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs36" %}

## Series customization

The following properties can be used to customize the `range step area` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill) – Specifies the color of the area series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/rangesteparea-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/rangesteparea-cs/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/rangesteparea-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
