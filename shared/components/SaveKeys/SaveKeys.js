import React, { Fragment, Component } from 'react'
import { connect } from 'redaction'

import CSSModules from 'react-css-modules'
import styles from './SaveKeys.scss'

import Field from './Field/Field'
import Button from 'components/controls/Button/Button'



@connect(({ user: { ethData, btcData } }) => ({
  btcData,
  ethData,
}))
@CSSModules(styles)
export default class SaveKeys extends Component {
  render() {
    const { ethData, btcData, isChange, isDownload } = this.props

    return (
      <Fragment>
        <div styleName="title" >
          These are your private keys. Download the keys by  clicking on <br />
          the button or take a screenshot of this page, then confirm it and click here. <br />
          <a href="" onClick={(event) => { event.preventDefault(); isChange() }}>I saved the keys in a safe place</a>
        </div>
        <div styleName="row" >
          <Button brand onClick={isDownload}>Download</Button>
          <div style={{ marginLeft: '15px', marginTop: '10px' }} >
            <Field
              label={ethData.currency}
              privateKey={ethData.privateKey.toString()}
            />
            <Field
              label={btcData.currency}
              privateKey={btcData.privateKey.toString()}
            />
          </div>
        </div>
      </Fragment>
    )
  }
}