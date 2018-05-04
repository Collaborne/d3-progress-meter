d3-task-planner
=================

`d3-task-planner` is a chart that shows tasks as draggable dots. It accepts as input a schedule as it's modeled by the [tasks-scheduler](https://github.com/Collaborne/tasks-scheduler). The web component is built with [Polymer 2.x](https://www.polymer-project.org) and [D3 v.4](http://d3js.org).

To use this element:

`bower install d3-task-planner`

## Examples

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="d3-task-planner.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<d3-task-planner></d3-task-planner>

```

### Custom Styling

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="d3-task-planner.html">
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

<d3-task-planner class="custom" radius="100" percentage="0.5" current-text="10" goal-text="Goal: 20" type-text="Visits" caption="New visits per day"></d3-task-planner>
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
    
