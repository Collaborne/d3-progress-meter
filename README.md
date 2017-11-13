d3-progress-meter [![Bower version](https://badge.fury.io/bo/d3-progress-meter.svg)](http://badge.fury.io/bo/d3-progress-meter) [![Travis state](https://travis-ci.org/Collaborne/d3-progress-meter.svg?branch=master)](https://travis-ci.org/Collaborne/d3-progress-meter) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Collaborne/d3-progress-meter)
=================

`d3-progress-meter` is an animated chart that shows the progress as a meter. The web component is built with [Polymer 1.x](https://www.polymer-project.org) and [D3](http://d3js.org).

The component has been inspired by [EK-progress-meter](https://github.com/pinkhominid/ek-progress-meter).

To use this element:

`bower install d3-progress-meter`

## Examples

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="d3-progress-meter.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<d3-progress-meter radius="100" percentage="0.2" current-text="70" goal-text="Goal: 200" type-text="transactions"></d3-progress-meter>
<d3-progress-meter radius="100" percentage="0.65" current-text="6.5m" goal-text="Goal: $10m" type-text="revenue"></d3-progress-meter>
<d3-progress-meter radius="100" percentage="0.9" current-text="225" goal-text="Goal: 250" type-text="points"></d3-progress-meter>
```

### Custom Styling

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="d3-progress-meter.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<style is="custom-style">
    .custom {
        --progress-meter-background-color: #00FFFF;
        --progress-meter-color-low: #009999;
        --progress-meter-color-medium: #009999;
        --progress-meter-color-high: #009999;
        --progress-meter-color-current: #009999;
    }
</style>

<d3-progress-meter class="custom" radius="100" percentage="0.5" current-text="10" goal-text="Goal: 20" type-text="Visits" caption="New visits per day"></d3-progress-meter>
```

## License

    This software is licensed under the Apache 2 license, quoted below.

    Copyright 2011-2015 Collaborne B.V. <http://github.com/Collaborne/>

    Licensed under the Apache License, Version 2.0 (the "License"); you may not
    use this file except in compliance with the License. You may obtain a copy of
    the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
    License for the specific language governing permissions and limitations under
    the License.
    
