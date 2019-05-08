const environmentHelper = {
  getHost() {
    switch (this.getEnv()) {
      case 'dev':
        return 'http://localhost:4000';
      case 'pre':
        return 'https://sspyk0d3xh.execute-api.us-east-1.amazonaws.com/dev';
      case 'prod':
        return '';
      default:
        return 'http://localhost:4000';
    }
  },
  getEnv(): 'dev' | 'pre' | 'prod' {
    const domain = window.location.hostname;
    const preDomains = ['fitbalanceroutine.com']
    if (preDomains.some(x => domain.indexOf(x) > -1)) return 'pre';
    else return 'dev';
  }
};

export default environmentHelper;
