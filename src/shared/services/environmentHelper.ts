const environmentHelper = {
  getHost() {
    switch (this.getEnv()) {
      case 'dev':
        return 'http://localhost:4000';
      case 'pre':
        return '';
      case 'prod':
        return '';
      default:
        return 'http://localhost:4000';
    }
  },
  getEnv(): 'dev' | 'pre' | 'prod' {
    const domain = window.location.hostname;
    const preDomains = ['fitbalance-test']
    if (preDomains.some(x => domain.indexOf(x) > -1)) return 'pre';
    else return 'dev';
  }
};

export default environmentHelper;
