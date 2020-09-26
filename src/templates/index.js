import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { pageContext } = this.props
    const { group, index, first, last, pageCount } = pageContext

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            {group.map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
              {pageCount > 1 &&
                <ul className="pagination">
                  {index > 1 &&
                    <li><Link to={index === 2 ? `/` : `/${index - 1}`}>&larr; Prev</Link></li>
                  }

                  {Array.from({length: pageCount}, (_, i) => i + 1).map(i => (<li key={i}><Link activeClassName="active" to={i === 1 ? `/` : `/${i}`}>{i}</Link></li>)
                  )}

                  {pageCount > index &&
                    <li><Link to={`/${index + 1}`}>Next &rarr;</Link></li>
                  }
                </ul>
              }
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}
