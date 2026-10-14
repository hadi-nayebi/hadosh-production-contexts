/** Keep timing attached to its original take while verifying a lossless playback variant. */
export function annotationIdentity(
  actual: string,
  candidate?: {
    annotation: { audioHash: string };
    playbackSha256?: string;
  },
) {
  return candidate?.playbackSha256 === actual ? candidate.annotation.audioHash : actual;
}
