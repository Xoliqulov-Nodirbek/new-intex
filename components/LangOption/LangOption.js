import React from 'react';

function LangOption() {
	return (
		<div className='flex items-center mb-2 justify-between'>
			<Image src={uzFlag} width={28} height={20} />
			<span className='text-sm font-medium'>Uz</span>
			<Image src={drop} width={9} height={5} />
		</div>
	);
}

export default LangOption;
