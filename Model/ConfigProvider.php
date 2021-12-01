<?php

namespace Magelearn\NewStepCheckout\Model;

use Magento\Checkout\Model\ConfigProviderInterface;
use Magento\Framework\View\LayoutInterface;

class ConfigProvider implements ConfigProviderInterface
{
    /** @var LayoutInterface  */
    protected $_layout;

    public function __construct(LayoutInterface $layout)
    {
        $this->_layout = $layout;
    }

    public function getConfig()
    {
        $checkoutBlockId = "checkout_products_block"; // CMS Block Identifier

        return [
            'checkout_products_block_content'=> $this->_layout->createBlock('Magento\Cms\Block\Block')->setBlockId($checkoutBlockId)->toHtml()
        ];
    }
}
