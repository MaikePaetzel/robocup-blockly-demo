/**
 * @license
 * 
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

import * as Blockly from 'blockly/core';
import 'blockly/javascript';

/**
 * Calls the addRobot(pos_x, pos_y) function.
 * @param block
 * @returns {string}
 */
Blockly.JavaScript['robot_add'] = function(block) {
    var value_pos_x = Blockly.JavaScript.valueToCode(block, 'init_x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_pos_y = Blockly.JavaScript.valueToCode(block, 'init_y', Blockly.JavaScript.ORDER_ATOMIC);
    return 'addRobot(' + value_pos_x + ', ' + value_pos_y + ');';
};

/**
 * Calls the moveRobot(pos_x, pos_y) function
 * @param block
 * @returns {string}
 */
Blockly.JavaScript['robot_move'] = function(block) {
    var value_pos_x = Blockly.JavaScript.valueToCode(block, 'pos_x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_pos_y = Blockly.JavaScript.valueToCode(block, 'pos_y', Blockly.JavaScript.ORDER_ATOMIC);
    return 'moveRobot(' + value_pos_x + ', ' + value_pos_y + ');';
};