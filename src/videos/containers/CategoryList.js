import React, {Component} from "react";
import { View, Text, FlatList } from "react-native";
import Empty from "../components/empty";
import VerticalSeparator from "../components/vertical-separator";
import Category from "../components/category";
import Layout from "../components/CategoryListLayout";
import HorizontalSeparator from "../../sections/components/horizontal-separator";


class CategoryList extends Component {
    keyExtractor = item => item.id.toString()
    
    renderEmpty = () => {
        return <Empty text='No hay componentes en la lista'/>
    }
    renderItem = (item) => {
        return (
            <Category {...item}/>
        )
    }
    itemSeparator = () => {
        return <HorizontalSeparator text='No hay componentes en la lista'/>
    }
    render(){
        return (
            <Layout title="Categorías....">
                <FlatList 
                    horizontal
                    keyExtractor={this.keyExtractor}
                    ListEmptyComponent={()=>this.renderEmpty()}
                    data={this.props.list} 
                    renderItem={({item})=>this.renderItem(item)}
                    ItemSeparatorComponent={()=>this.itemSeparator()}
                />
            </Layout>
        )
    }
}

export default CategoryList