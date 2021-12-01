var config = {
	paths: {            
    	'slick': "Magelearn_NewStepCheckout/js/slick"
    },
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'Magelearn_NewStepCheckout/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Magelearn_NewStepCheckout/js/view/shipping-payment-mixin': true
            }
        }
    },
    shim: {
		'slick': {
	    	deps: ['jquery']
	    }
	}
}
