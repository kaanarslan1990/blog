import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default function EditScreen({route}) {
  const {state} = useContext(Context);
  const blogPost = state.find((blogPost)=> blogPost.id === route.params.id)
  return (
    <BlogPostForm initialValues={{title:blogPost.title,content:blogPost.content}}/>
  )
}

const styles = StyleSheet.create({})