import React from 'react'
import './ProductComponent.css'
import ProductComponent__slides from './ProductComponent__slides'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function ProductComponent() {
    return (
        <div className="ProductComponent">
            <p className="ProductComponent__Title">Shop By Category</p>
            <div   className="ProductComponent__Head">
                    <Tabs dir="rtl" defaultIndex={4}>
                        <TabList className="ProductComponent__HeadTabs">
                            <Tab>Cat4</Tab>
                            <Tab>Cat3</Tab>
                            <Tab>Cat2</Tab>
                            <Tab>Cat1</Tab>
                            <Tab>All</Tab>
                        </TabList>
                        <TabPanel>
                            <ProductComponent__slides />
                        </TabPanel>
                        <TabPanel>
                            <ProductComponent__slides />
                        </TabPanel>
                        <TabPanel>
                            <ProductComponent__slides />
                        </TabPanel>
                        <TabPanel>
                            <ProductComponent__slides />
                        </TabPanel>
                        <TabPanel>
                            <ProductComponent__slides />
                        </TabPanel>
                    </Tabs>
            </div>
        </div>
    )
}

export default ProductComponent
