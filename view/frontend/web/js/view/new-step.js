define([
    'ko',
    'jquery',
    'uiComponent',
    'underscore',
    'Magento_Checkout/js/model/step-navigator',
    'mage/translate',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/model/cart/totals-processor/default'
], function (ko, $, Component, _, stepNavigator, $t, quote, totalsDefaultProvider) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Magelearn_NewStepCheckout/new-step'
        },

        isVisible: ko.observable(true),
        quoteIsVirtual: quote.isVirtual(),

        /**
         * @returns {*}
         */
        initialize: function () {
            this._super();

            stepNavigator.registerStep(
                'new_step',
                null,
                $t('Checkout Products'),
                this.isVisible,

                _.bind(this.navigate, this),
                1
            );

            return this;
        },

        navigate: function () {
            var self = this;
            self.isVisible(true);
        },

        /**
         * @returns void
         */
        navigateToNextStep: function () {
            stepNavigator.next();
        },

        /**
         * Estimate totals
         */
        updateOrder: function () {
            totalsDefaultProvider.estimateTotals(quote.shippingAddress());
        }
    });
});
