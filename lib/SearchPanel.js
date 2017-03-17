'use strict';

function SearchPanel(sideTabsProvider, eventBus){
  this._sideTabsProvider = sideTabsProvider;
  this._eventBus = eventBus;
  this._elementsList = [];
  this._init();
}

SearchPanel.$inject = [
  'sideTabsProvider'
];

SearchPanel.prototype._init = function(){
  this._registerSideTab();
};

SearchPanel.prototype._drawForm = function(){
  console.log('draw form');
};

SearchPanel.prototype._registerSideTab = function(){
  //var that = this;
  this._sideTabsProvider.registerSideTab({
    title: 'Search element',
    iconClassName: 'icon-glass',
    action: {
      created: function () {
        console.log('that._drawForm();');
      },
      click: function () {
        console.log('that._reIndexItems();', arguments);
      },
      close: function () {
        console.log('search panel close');
      }
    },
  }, 0);
};

SearchPanel.prototype._reIndexItems = function(){
  // re index list.js
};

/* markup definition */

SearchPanel.HTML_MARKUP =
  '<div class="pfdjs-palette">' +
  '  <div class="pfdjs-entries">' +
  '  </div>' +
  '</div>';

module.exports = SearchPanel;