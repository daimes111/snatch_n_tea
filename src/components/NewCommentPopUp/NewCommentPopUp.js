import React from "react"
import ReactDom from "react-dom"
import styles from "./NewCommentPopUp.module.scss"

export default function NewCommentPopUp({open}){
    if (!open) return null

  return (
    <h2>Hello!</h2>
  )
}