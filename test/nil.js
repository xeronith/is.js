describe( 'bundle:nil' , function () {

  it( 'is.null' , function () {
    expect( is[ 'null' ]( null ) ).to.be.ok()
    expect( is[ 'null' ]( void 0 ) ).to.not.be.ok()
  } )

  it( 'is.undefined' , function () {
    expect( is[ 'undefined' ]( null ) ).to.not.be.ok()
    expect( is[ 'undefined' ]( void 0 ) ).to.be.ok()

  } )

  it( 'is.exist' , function () {
    expect( is.exist( null ) ).to.not.be.ok()
    expect( is.exist( void 0 ) ).to.not.be.ok()
  } )

  it( 'is.nil' , function () {
    expect( is.nil( null ) ).to.be.ok()
    expect( is.nil( void 0 ) ).to.be.ok()
  } )

} )
