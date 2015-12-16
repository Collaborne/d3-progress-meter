d3-progress-meter [![Bower version](https://badge.fury.io/bo/d3-progress-meter.svg)](http://badge.fury.io/bo/d3-progress-meter) [![Travis state](https://travis-ci.org/Collaborne/d3-progress-meter.svg?branch=master)](https://travis-ci.org/Collaborne/d3-progress-meter)
=================

`d3-progress-meter` is an animated chart that shows the progress as a meter. The web component is built with [Polymer 1.x](https://www.polymer-project.org) and [D3](http://d3js.org).

The component has been inspired by [EK-progress-meter](https://github.com/pinkhominid/ek-progress-meter).

![Screenshot](/doc/screenshot.png "Screenshot")


## Usage

`bower install d3-progress-meter`

```html
<d3-progress-meter radius="100" percentage="0.35" current-text="70" goal-text="Goal: 200" type-text="transactions"></d3-progress-meter>
```


## Properties

Property         | Type   | Description                                                              | Example
---------------- | ------ | ------------------------------------------------------------------------ | -------
**radius**       | Number | Radius of the meter. The element will have twice the size of the radius. | 100
**percentage**   | Number | Progress in percent                                                      | 0.4
**current-text** | String | Large number showing current progress                                    | $8
**goal-text**    | String | Small text indicating when progress will be 100%                         | Goal: $20
**type-text**    | String | Bottom text describing for what progress is measured                     | Sales


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
    
