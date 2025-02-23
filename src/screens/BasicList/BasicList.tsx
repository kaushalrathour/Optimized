import React, { useEffect, useMemo, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { BasicListScreenProp } from '../../types/StackParamList'
import axios from "axios"
import Container from '../../components/Container/Container'
import { ThemeState } from '../../types/SliceTypes'
import { createStyles } from './styles'
import { useSelector } from 'react-redux'
import { Comment } from '../../types/Comment'
import BasicListItem from '../../components/BasicListItem/BasicListItem'


export default function BasicListScreen ({navigation}: BasicListScreenProp) {
  const { colors, isDarkMode }: ThemeState = useSelector((state: any) => state.theme);
  const [comments, setComments] = useState<Comment[]>([]);
  const fetchData = async ()=> {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments");
      setComments(data)
    } catch (error) {
      
    }
  }
    const styles = useMemo(() => {
        return createStyles(colors);
    }, [colors, isDarkMode]);  

    useEffect(()=>{
      fetchData()
    },[])

    return (
        <Container>
        <FlatList data={comments} keyExtractor={(item)=> item.postId} renderItem={({item})=>{
          return(
            <BasicListItem body={item.body} email={item.email} name={item.name} postId={item.postId} id={item.id}/>
          )
        }}
        initialNumToRender={10}
        removeClippedSubviews />
  
      </Container>
    )
  }


