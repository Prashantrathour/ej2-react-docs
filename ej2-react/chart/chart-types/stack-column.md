---
layout: post
title: Stacked Column Chart in React Chart component | Syncfusion
description: Learn here all about Stacked Column Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Stacked Column Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Stacked Column Chart in React Chart component

## Stacked Column

To render a stacked column series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StackingColumn` and inject `StackingColumnSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs23" %}

## Series customization

The following properties can be used to customize the `stacked column` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#properties) – Specifies the [color](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/stackedcolumn-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/stackedcolumn-cs/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/stackedcolumn-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
