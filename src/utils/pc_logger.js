class PCLogger {
	constructor(){
		this.env = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';
		this.doLog = false;
		this.logRenders = false;
		this.logSession = false;
		this.logStorage = false;
		this.logXHR = false;
	}
	log = (message,data,label='log',labelColor = '#fae583') => {
		if(this.env != 'production' && this.doLog)
			console.log(
				`%c[ PC ][ Enviroment: ${this.env} ](%c${label}%c) >> %c${message}`,
				`color: #4d8f7a`,
				`color: ${labelColor}`,
				`color: #4d8f7a`,
				`color: ${labelColor}`,
				data
			);
	};
	dlog = (message,data) => {if(this.logStorage) this.log(message,data,'Storage','#9642d3');};
	rlog = (message,component) => {if(this.logRenders) this.log(message,component,'Render','#ff7f50');};
	slog = (message,data) => {if(this.logSession) this.log(message,data,'Session','#44eeee');};
	xlog = (message,data) => {if(this.logXHR) this.log(message,data,'XHR','#7a9eea');};
}
export const pc_logger = new PCLogger();