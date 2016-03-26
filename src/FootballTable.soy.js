/* jshint ignore:start */
import Component from 'metal-component';
import { SoyAop, SoyRenderer, SoyTemplates } from 'metal-soy';
var Templates = SoyTemplates.get();
// This file was automatically generated from FootballTable.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.FootballTable.
 */

if (typeof Templates.FootballTable == 'undefined') { Templates.FootballTable = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.FootballTable.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="football-table component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + Templates.FootballTable.renderRange_({maxValue: opt_data.rounds.length, value: opt_data.selectedRound}, null, opt_ijData) + Templates.FootballTable.renderTable_(soy.$$augmentMap(opt_data.rounds, {columns: opt_data.tableColumnNames, columnClasses: opt_data.tableColumnClassNames, value: opt_data.rounds[opt_data.selectedRound - 1], tableClasses: opt_data.tableClasses}), null, opt_ijData) + '</div>');
};
if (goog.DEBUG) {
  Templates.FootballTable.render.soyTemplateName = 'Templates.FootballTable.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.FootballTable.renderTable_ = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<table class="' + soy.$$escapeHtmlAttribute(opt_data.tableClasses ? opt_data.tableClasses : '') + '"><thead><tr>';
  var columnList21 = opt_data.columns;
  var columnListLen21 = columnList21.length;
  for (var columnIndex21 = 0; columnIndex21 < columnListLen21; columnIndex21++) {
    var columnData21 = columnList21[columnIndex21];
    output += '<th class="col-' + soy.$$escapeHtmlAttribute(opt_data.columnClasses[columnIndex21]) + '"><span class="table-column">' + soy.$$escapeHtml(columnData21) + '</span></th>';
  }
  output += '</tr></thead><tbody>';
  var arrayRowValueList29 = opt_data.value;
  var arrayRowValueListLen29 = arrayRowValueList29.length;
  for (var arrayRowValueIndex29 = 0; arrayRowValueIndex29 < arrayRowValueListLen29; arrayRowValueIndex29++) {
    var arrayRowValueData29 = arrayRowValueList29[arrayRowValueIndex29];
    var rowIndex__soy30 = arrayRowValueIndex29 + 1;
    output += Templates.FootballTable.renderRow_({arrayRowValue: arrayRowValueData29, columnClasses: opt_data.columnClasses, rowIndex: rowIndex__soy30}, null, opt_ijData);
  }
  output += '</tbody></table>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.FootballTable.renderTable_.soyTemplateName = 'Templates.FootballTable.renderTable_';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.FootballTable.renderRow_ = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<tr class="row-' + soy.$$escapeHtmlAttribute(opt_data.rowIndex) + '">';
  var keyList41 = soy.$$getMapKeys(opt_data.arrayRowValue);
  var keyListLen41 = keyList41.length;
  for (var keyIndex41 = 0; keyIndex41 < keyListLen41; keyIndex41++) {
    var keyData41 = keyList41[keyIndex41];
    output += '<td class="' + soy.$$escapeHtmlAttribute(opt_data.columnClasses[keyIndex41]) + '">' + soy.$$escapeHtml(opt_data.arrayRowValue[keyData41]) + '</td>';
  }
  output += '</tr>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.FootballTable.renderRow_.soyTemplateName = 'Templates.FootballTable.renderRow_';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.FootballTable.renderRange_ = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<input data-onchange="changeTableContents" id="round" min="1" max="' + soy.$$escapeHtmlAttribute(opt_data.maxValue) + '" type="range" value="' + soy.$$escapeHtmlAttribute(opt_data.value) + '" />');
};
if (goog.DEBUG) {
  Templates.FootballTable.renderRange_.soyTemplateName = 'Templates.FootballTable.renderRange_';
}

Templates.FootballTable.render.params = ["tableClasses","id","rounds","selectedRound","tableColumnNames","tableColumnClassNames"];
Templates.FootballTable.renderTable_.private = true;
Templates.FootballTable.renderRow_.private = true;
Templates.FootballTable.renderRange_.private = true;

class FootballTable extends Component {}
FootballTable.RENDERER = SoyRenderer;
SoyAop.registerTemplates('FootballTable');
export default FootballTable;
/* jshint ignore:end */
