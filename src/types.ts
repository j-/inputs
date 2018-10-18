export enum ButtonType {
	PRIMARY   = 0,
	AUXILIARY = 1,
	SECONDARY = 2,
	BACK      = 3,
	FORWARD   = 4,
}

export const ButtonTypeLabels = {
	[ButtonType.PRIMARY]:   'Left click',
	[ButtonType.SECONDARY]: 'Right click',
	[ButtonType.AUXILIARY]: 'Middle click',
	[ButtonType.BACK]:      'Back',
	[ButtonType.FORWARD]:   'Forward',
};

export enum ButtonsType {
	UNINITIALIZED = 0,
	PRIMARY       = 1 << 0,
	SECONDARY     = 1 << 1,
	AUXILIARY     = 1 << 2,
	BACK          = 1 << 3,
	FORWARD       = 1 << 4,
}

export const ButtonsTypeLabels = {
	[ButtonsType.UNINITIALIZED]: 'Uninitialized',
	[ButtonsType.PRIMARY]:       'Left click',
	[ButtonsType.SECONDARY]:     'Right click',
	[ButtonsType.AUXILIARY]:     'Middle click',
	[ButtonsType.BACK]:          'Back',
	[ButtonsType.FORWARD]:       'Forward',
};

export enum DeltaMode {
	PIXEL = 0,
	LINE  = 1,
	PAGE  = 2,
}

export const DeltaModeLabels = {
	[DeltaMode.PIXEL]: 'Pixel',
	[DeltaMode.LINE]:  'Line',
	[DeltaMode.PAGE]:  'Page',
};
