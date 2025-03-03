import { useSettingsStore } from '@/stores/settings.store';

const DEFAULT_TITLE = 'CMS AI Tool';

export function useDocumentTitle() {
	const settingsStore = useSettingsStore();
	const { releaseChannel } = settingsStore.settings;

	const set = (title: string) => {
		const sections = [title || DEFAULT_TITLE];
		document.title = sections.join('');
	};

	const reset = () => {
		set('');
	};

	return { set, reset };
}
