import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div><h1>My Site's Files</h1>
            <table>
                <thead>
                    <tr>
                        <th>relativePath</th>
                        <th>relativeDirectory</th>
                        <th>extension</th>
                        <th>size</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({ node }, index) => (
                        <tr key={index}>
                            <td>{node.relativePath}</td>
                            <td>{node.relativeDirectory}</td>
                            <td>{node.extension}</td>
                            <td>{node.size}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    relativePath
                    relativeDirectory
                    extension
                    size
                }
            }
        }
    }
`