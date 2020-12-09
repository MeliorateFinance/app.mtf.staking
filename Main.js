import React, { Component } from 'react';
import mtf from "../mtf.png";

class Main extends Component {

  state = {
    button: 1,
	amountErrorBtn:""
	
  };

  onSubmit = e => {
    e.preventDefault();
    let amount 
    amount = this.input.value.toString()
    amount = window.web3.utils.toWei(amount, 'Ether')
	let amountErrorBtn="";
    
    if (this.state.button === 1) {
		
			this.props.stakeTokens(amount)
      
    }
    if (this.state.button === 2) {
		
		if(0!=this.props.calculateMSPEarnings ){
			amountErrorBtn="!!! Please claim your rare MTS balance before unstaking !!!";
			window.alert(amountErrorBtn);
			return false;
		}else{
			this.props.unstakeTokens(amount)
		}
	
    }
	
	if (this.state.button === 3) {
		
		if(amount!=this.props.claimableMTFReward ){
			amountErrorBtn="Invalid Amount: !!! Please enter the full unclaimed MTF amount.Partial claims are not allowed !!!";
			window.alert(amountErrorBtn);
			return false;
		}else{
			this.props.claimStakingReward(amount)
		}    
	}
	
	if (this.state.button === 4) {
		
		if(amount!=this.props.calculateMSPEarnings ){
			amountErrorBtn="Invalid Amount: !!! Please enter the full unclaimed MTS amount.Partial claims are not allowed !!!";
			window.alert(amountErrorBtn);
			return false;
		}else{
			this.props.claimMSPRewards(amount)
		}    
	}
	
	if (this.state.button === 5) {
		
			this.props.approveSpender(amount)
	}
  };

  render(){
	  
    return (
        <div id="content" className="mt-2" >

        <table className="table table-borderless text-muted text-center">
          <thead>
		  
		  <tr><td>
                <label className="float-right"><h5><b>THIS PROJECT IS IN BETA. USE AT YOUR OWN RISK</b></h5></label></td>
                
			</tr>
		  
		  <tr><td>
                <label className="float-left"><b>Total Staked(MTF) in the pool</b></label></td>
                <td><span className="float-right text-muted">
                  <b>{window.web3.utils.fromWei(this.props.rewardPool, 'Ether')} MTF</b>
                        &nbsp;&nbsp;   
                </span></td>
			</tr>
		  
			<tr><td>
                <label className="float-left"><b>Your Staking Balance(MTF)</b></label></td>
                <td><span className="float-right text-muted">
                  <b>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} MTF</b>
                        &nbsp;&nbsp;   
                </span></td>
			</tr>
			
			<tr><td>
                <label className="float-left"><b>Your Unclaimed Reward(MTF)</b></label></td>
                <td><span className="float-right text-muted">
                  <b>{window.web3.utils.fromWei(this.props.claimableMTFReward, 'Ether')} MTF</b>
                        &nbsp;&nbsp; 
                </span></td>
			</tr>
			
			<tr><td>
                <label className="float-left"><b>Your Claimed Reward(MTS)</b></label></td>
                <td><span className="float-right text-muted">
                  <b>{window.web3.utils.fromWei(this.props.mtsTokenBalance, 'Ether')} MTS</b>
                        &nbsp;&nbsp;   
                </span></td>
			</tr>
			
			<tr><td>
                <label className="float-left"><b>Your Unclaimed Reward(MTS)</b></label></td>
                <td><span className="float-right text-muted">
                  <b>{window.web3.utils.fromWei(this.props.calculateMSPEarnings, 'Ether')} MTS</b>
                        &nbsp;&nbsp; 
                </span></td>
			</tr>
		  
            
          </thead>
         
        </table>

        <div className="card mb-4" style={{
        backgroundColor: '#e6e6e6'
      }}>

          <div className="card-body">

            <form className="mb-3" onSubmit={ this.onSubmit }>
              <div>
                <label className="float-left"><b>Stake/Unstake Tokens/Claim Reward</b></label>
                <span className="float-right text-muted">
                 <b> MTF Balance: {window.web3.utils.fromWei(this.props.mtfTokenBalance, 'Ether')}</b>
                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  ref={(input) => { this.input = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required />
                <div className="input-group-append">
                  <div className="input-group-text">
                    
                    &nbsp;MTF
                  </div>
                </div>
              </div>
			  
			  <div className='row'>
                <div className='col'>
                  <button 
                    onClick={() => (this.state.button = 5)}
                    type="submit" className="btn btn-outline-secondary mb-1 form-control text-left btn-block btn-lg">
                      Approve
                  </button>
                </div>
			  
                <div className='col'>
                  <button 
                    onClick={() => (this.state.button = 1)}
                    type="submit" className="btn btn-outline-secondary mb-1 form-control text-left btn-block btn-lg">
                      Stake
                  </button>
                </div>
                
				
				<div className='col'>
                  <button
                    onClick={() => (this.state.button = 3)}
                    type="submit"
                    className="btn btn-outline-secondary mb-1 form-control text-left btn-block btn-lg">
                      Claim MTF
                  </button>
                </div>
				
				<div className='col'>
                  <button
                    onClick={() => (this.state.button = 4)}
                    type="submit"
                    className="btn btn-outline-secondary mb-1 form-control text-left btn-block btn-lg">
                      Claim MTS
                  </button>
                </div>
				
				<div className='col'>
                  <button
                    onClick={() => (this.state.button = 2)}
                    type="submit"
                    className="btn btn-outline-secondary mb-1 form-control text-left btn-block btn-lg">
                      Unstake
                  </button>
                </div>
				
              </div>
            </form>
          </div>
        </div>

      </div>
      
    );
  }
}

export default Main;
