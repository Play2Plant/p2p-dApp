import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import tree from '../assets/img/tree.png'
import {
  request_mintNft,
  request_totalSupply,
  request_nftLimit,
  request_nftPrice,
  checkConnection,
  getTokenURI,
  getTokensByAddress,
} from '../lib/web3'
import axios from 'axios'

const NFT = () => {
  const [totalSupply, setTotalSupply] = useState(0)
  const [limit, setLimit] = useState(0)
  const [price, setPrice] = useState(0)
  const [loading, setLoading] = useState(false)
  const [address, setAddress] = useState('')
  const [list, setlist] = useState([])
  const [nftList, setnftList] = useState([])

  useEffect(() => {
    getPrice()
    getLimit()
    getTotalSupply()
    getTokens()
    checkAddress()
  }, [])

  useEffect(() => {
    getTokens()
  }, [address])

  useEffect(() => {
    getMetadatas()
  }, [list])

  const getMetadatas = async () => {
    var ok = []

    for (let i=0; i < list.length; i++) {
        await axios.get(list[i], { responseType: 'json' }).then((response) => {
            ok.push(response.data)
          }).catch(() => {});
    }
    setnftList(ok)
  }

  const checkAddress = async () => {
    const address = await checkConnection()
    setAddress(address)
  }

  const getPrice = async () => {
    const price = await request_nftPrice()
    setPrice(price)
  }

  const getLimit = async () => {
    const limit = await request_nftLimit()
    setLimit(limit)
  }

  const getTotalSupply = async () => {
    const total = await request_totalSupply()
    setTotalSupply(total)
  }

  const mint = async () => {
    setLoading(true)
    const ok = await request_mintNft(1, price)
    console.log(ok)
    getTotalSupply()
    getTokens()
    setLoading(false)
  }

  const getTokens = async () => {
    var urls = []
    if (address) {
      const array = await getTokensByAddress(address)

      array.forEach(async (element) => {
        let response = await getTokenURI(element)
        var responseFormat = response.substr(7)
        urls.push('https://ipfs.io/ipfs/' + responseFormat)
        setlist(urls)
      })
    }
  }
  console.log(list,nftList)
  return (
    <Container>
        {list.length > 0 ? (
             <Row>
             <h1>My NFTs</h1>
          {nftList.map((item, i) => (
              <Col
              xs={4}
              md={4}
              lg={4}
              className="d-flex justify-content-center"
              style={{ marginTop: '20px' }}
            >
              <Card key={i} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <div className="d-flex justify-content-center">
                    {/* <Button
                        disabled={loading}
                        variant="primary"
                        onClick={() => mint()}
                    >
                        Mint {price}{' '}
                    </Button> */}
                  </div>
                </Card.Body>
              </Card>
              </Col>
          ))}
        
          </Row>
        ) : (
            <Row>
                <h1>Mint your first tree</h1>
            <Col
                  className="d-flex justify-content-center"
                  style={{ marginTop: '20px' }}
                >
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={tree} />
              <Card.Body>
                <Card.Title>Tree NFT</Card.Title>
                <Card.Text>
                  Ce LEAF TREE à déjà donné vie à 10 arbres dans le monde réel
                  et si tu fais 10 000 pas aujourd'hui, il te donnera 6 LEAFs.
                  Des LEAFs qui permettront de planter de nouveaux arbres. Alors
                  lève toi et marche!
                </Card.Text>
                <div>{limit - totalSupply} / 10000 restant</div>
                <br></br>
                <div className="d-flex justify-content-center">
                  <Button
                    disabled={loading}
                    variant="primary"
                    onClick={() => mint()}
                  >
                    Mint {price}{' '}
                  </Button>
                </div>
              </Card.Body>
            </Card>
            </Col>
            </Row>
        )}
    </Container>
  )
}

export default NFT
