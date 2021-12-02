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
            	// step code will be used as step content id in the component template
                'new_step',
                // step alias
                null,
                // step title value
                $t('Checkout Products'),
                // observable property with logic when display step or hide step
                this.isVisible,

                _.bind(this.navigate, this),
                /**
                 * sort order value
                 * 'sort order value' < 10: step displays before shipping step;
                 * 10 < 'sort order value' < 20 : step displays between shipping and payment step
                 * 'sort order value' > 20 : step displays after payment step
                 */
                1
            );

            return this;
        },

        navigate: function () {
            this.isVisible(true);
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
